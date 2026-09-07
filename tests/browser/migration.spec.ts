import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.route("https://www.google.com/recaptcha/**", (route) =>
		route.fulfill({
			contentType: "application/javascript",
			body: "window.grecaptcha = { ready: callback => callback(), execute: async () => 'test-token' };",
		}),
	);
	// Never let a browser test send a real contact message.
	await page.route("**/*", (route) =>
		route.request().method() === "POST" ? route.abort() : route.fallback(),
	);
	page.on("pageerror", (error) => {
		throw error;
	});
});

test("mobile navigation dismisses, traps/restores focus and follows links", async ({
	page,
	isMobile,
}) => {
	test.skip(!isMobile);
	await page.goto("/");
	const trigger = page.locator("header button");
	const dialog = page.getByRole("dialog");
	await trigger.click();
	await expect(dialog).toBeVisible();
	await dialog.getByRole("button", { name: "Close", exact: true }).focus();
	await page.keyboard.press("Shift+Tab");
	await expect(dialog.getByRole("link").last()).toBeFocused();
	await page.keyboard.press("Tab");
	await expect(
		dialog.getByRole("button", { name: "Close", exact: true }),
	).toBeFocused();
	await page.keyboard.press("Escape");
	await expect(dialog).toBeHidden();
	await expect(trigger).toBeFocused();
	await trigger.click();
	await dialog.getByRole("button", { name: "Close", exact: true }).click();
	await expect(dialog).toBeHidden();
	await trigger.click();
	await page.mouse.click(400, 700);
	await expect(dialog).toBeHidden();
	await trigger.click();
	await dialog.getByRole("link", { name: "Contact", exact: true }).click();
	await expect(dialog).toBeHidden();
	await expect(page).toHaveURL(/#contact$/);
	await expect
		.poll(() => page.evaluate(() => getComputedStyle(document.body).overflow))
		.not.toBe("hidden");
});

for (const slug of ["gatherr", "filmfever"]) {
	test(`${slug} accordion preserves single expansion and keyboard navigation`, async ({
		page,
	}) => {
		await page.goto(`/case-study/${slug}`);
		const front = page.getByRole("button", { name: "Front End", exact: true });
		const back = page.getByRole("button", { name: "Back End", exact: true });
		await expect(front).toHaveAttribute("aria-expanded", "false");
		await front.focus();
		await page.keyboard.press("Enter");
		await expect(front).toHaveAttribute("aria-expanded", "true");
		const panelId = await front.getAttribute("aria-controls");
		await expect(page.locator(`[id="${panelId}"]`)).toBeVisible();
		await page.keyboard.press("ArrowDown");
		await expect(back).toBeFocused();
		await page.keyboard.press("Space");
		await expect(back).toHaveAttribute("aria-expanded", "true");
		await expect(front).toHaveAttribute("aria-expanded", "false");
		await page.keyboard.press("Space");
		await expect(back).toHaveAttribute("aria-expanded", "false");
		await page.keyboard.press("End");
		await expect(
			page.getByRole("button", { name: "Dependencies", exact: true }),
		).toBeFocused();
		await page.keyboard.press("Home");
		await expect(front).toBeFocused();
		await page.keyboard.press("ArrowUp");
		await expect(
			page.getByRole("button", { name: "Dependencies", exact: true }),
		).toBeFocused();
	});
}

test("project links and carousel retain navigation and zoom behavior", async ({
	page,
	isMobile,
}) => {
	await page.goto("/case-study/gatherr");
	const github = page.getByRole("link", { name: "View Code on GitHub" });
	await expect(github).toHaveAttribute("href", /github.com/);
	await expect(github).toHaveAttribute("target", "_blank");
	await expect(github).toHaveAttribute("rel", /noreferrer/);
	const previous = page.getByRole("button", { name: "Previous slide" }).first();
	const next = page.getByRole("button", { name: "Next slide" }).first();
	await expect(previous).toBeDisabled();
	// Existing mobile layout overlaps the arrow; exercise its keyboard activation.
	if (isMobile) await next.press("Enter");
	else await next.click();
	await expect(previous).toBeEnabled();
	await next.press("ArrowLeft");
	await expect(previous).toBeDisabled();
	await page.getByAltText("image", { exact: true }).first().click();
	await expect(
		page.getByRole("dialog", { name: "Zoomed image view" }),
	).toBeVisible();
	await page.keyboard.press("Escape");
	await expect(
		page.getByRole("dialog", { name: "Zoomed image view" }),
	).toBeHidden();
	const nextProject = page.getByRole("link", { name: "Next Project" });
	await nextProject.press("Space");
	await expect(page).toHaveURL(/gatherr$/);
	await nextProject.press("Enter");
	await expect(page).not.toHaveURL(/gatherr$/);
});

test("contact labels, validation, pending state, failure and success", async ({
	page,
}) => {
	await page.goto("/#contact");
	await page.waitForFunction("Boolean(window.grecaptcha)");
	const name = page.getByRole("textbox", { name: "Name" });
	const email = page.getByRole("textbox", { name: "Email" });
	const message = page.getByRole("textbox", { name: "Message" });
	const submit = page.getByRole("button", { name: "Send Message" });
	await submit.click();
	await expect(email).toBeFocused();
	await expect(email).toHaveAttribute("aria-invalid", "true");
	const errorId = (await email.getAttribute("aria-describedby"))
		?.split(" ")
		.at(-1);
	expect(errorId).toBeTruthy();
	await expect(page.locator(`[id="${errorId}"]`)).toBeVisible();
	await name.fill("Browser Test");
	await email.fill("test@example.com");
	await message.fill("This is a browser regression test message.");
	const responses: Array<() => void> = [];
	let serverError: string | undefined = "Test delivery failed";
	await page.route("**/*", async (route) => {
		if (!route.request().headers()["next-action"]) return route.fallback();
		await new Promise<void>((resolve) => {
			responses.push(resolve);
		});
		await route.fulfill({
			contentType: "text/x-component",
			body: `0:${JSON.stringify({ a: "$@1", b: "test", f: "" })}\n1:${JSON.stringify(serverError ? { serverError } : { data: { success: true } })}\n`,
		});
	});
	await submit.click();
	await expect(page.getByRole("button", { name: "Sending..." })).toBeDisabled();
	await expect.poll(() => responses.length).toBe(1);
	responses.shift()?.();
	await expect(
		page.getByText("Test delivery failed", { exact: true }),
	).toBeVisible();
	await expect(name).toHaveValue("Browser Test");
	serverError = undefined;
	await submit.click();
	await expect.poll(() => responses.length).toBe(1);
	responses.shift()?.();
	await expect(
		page.getByText("Email sent successfully!", { exact: true }),
	).toBeVisible();
	await expect(name).toHaveValue("");
	await expect(email).toHaveValue("");
	await expect(message).toHaveValue("");
});

for (const route of [
	"/",
	"/case-study/gatherr",
	"/case-study/filmfever",
	"/case-study/pokedex",
]) {
	test(`capture ${route}`, async ({ page }, testInfo) => {
		await page.goto(route);
		await page.evaluate(async () => {
			await document.fonts.ready;
			document.documentElement.style.scrollBehavior = "auto";
			for (let y = 0; y < document.body.scrollHeight; y += 600) {
				window.scrollTo(0, y);
				await new Promise((resolve) => setTimeout(resolve, 150));
			}
			window.scrollTo(0, 0);
			await new Promise((resolve) => setTimeout(resolve, 1500));
		});
		await page.screenshot({
			path: `/tmp/portfolio-ui-${process.env.UI_CAPTURE_PHASE || "after"}/${testInfo.project.name}-${route.replaceAll("/", "_")}.png`,
			fullPage: true,
			animations: "disabled",
		});
	});
}
