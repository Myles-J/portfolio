import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "./tests/browser",
	workers: 1,
	use: {
		baseURL: "http://127.0.0.1:3107",
		trace: "retain-on-failure",
	},
	projects: [
		{ name: "desktop", use: { ...devices["Desktop Chrome"] } },
		{ name: "mobile", use: { ...devices["Pixel 7"] } },
	],
	webServer: {
		command: "bunx next dev --hostname 127.0.0.1 --port 3107",
		url: "http://127.0.0.1:3107",
		reuseExistingServer: false,
		timeout: 120_000,
		env: {
			NEXT_DIST_DIR: ".next-e2e",
			NEXT_PUBLIC_RECAPTCHA_SITE_KEY: "browser-test-key",
			EMAIL_USER: "test@example.com",
			EMAIL_PASS: "browser-test-placeholder",
			RECAPTCHA_SECRET_KEY: "browser-test-placeholder",
		},
	},
});
