import { type ContactMessage, contactSchema } from "./schema";

export type MailAdapter = {
	send: (message: ContactMessage) => Promise<{ rejected: readonly unknown[] }>;
};

export type CaptchaAdapter = {
	verify: (token: string) => Promise<boolean>;
};

export async function submitContact(
	message: ContactMessage,
	recaptchaToken: string,
	{ captcha, mail }: { captcha: CaptchaAdapter; mail: MailAdapter },
) {
	const parsed = contactSchema.parse(message);

	if (!(await captcha.verify(recaptchaToken))) {
		throw new Error(
			"An error occurred while sending the email. Please try again later.",
		);
	}

	const info = await mail.send(parsed);
	if (info.rejected.length > 0) {
		throw new Error("Email not sent. Please try again later.");
	}

	return { success: true as const };
}
