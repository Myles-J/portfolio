"use server";
import { transport } from "@/lib/nodemailer";
import { safeAction } from "@/lib/safe-action";
import { contactSchema } from "../../schema";
import { isRecaptchaValid } from "../../utils";
import { env } from "@/lib/env";

export const sendEmail = safeAction
	.metadata({
		actionName: "sendEmail",
	})
	.inputSchema(contactSchema)
	.action(async ({ parsedInput: { name, email, message, recaptchaToken } }) => {
		const recaptchaValid = await isRecaptchaValid(recaptchaToken);
		if (!recaptchaValid) {
			throw new Error("An error occurred while sending the email. Please try again later.");
		}

		const info = await transport.sendMail({
			from: env.EMAIL_USER,
			to: env.EMAIL_USER,
			subject: `Message from ${name}: ${email}`,
			text: message,
		});

		if (info.rejected.length > 0) {
			throw new Error("Email not sent. Please try again later.");
		}

		return {
			success: true,
		};
	});
