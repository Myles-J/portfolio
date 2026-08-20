import "server-only";
import { env } from "@/lib/env";
import { transport } from "@/lib/nodemailer";
import type { CaptchaAdapter, MailAdapter } from "./submit";

export const googleCaptcha: CaptchaAdapter = {
	async verify(token) {
		const response = await fetch(
			`https://www.google.com/recaptcha/api/siteverify?secret=${env.RECAPTCHA_SECRET_KEY}&response=${token}`,
		);
		if (!response.ok) return false;
		const data = (await response.json()) as { success: boolean };
		return data.success;
	},
};

export const gmailMail: MailAdapter = {
	async send({ name, email, message }) {
		return transport.sendMail({
			from: env.EMAIL_USER,
			to: env.EMAIL_USER,
			replyTo: email,
			subject: "New Contact Form Message",
			text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
		});
	},
};
