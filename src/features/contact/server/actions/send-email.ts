"use server";
import type Mail from "nodemailer/lib/mailer";
import { transport } from "@/lib/nodemailer";
import { safeAction } from "@/lib/safe-action";
import { contactSchema } from "../../schema";

export const sendEmail = safeAction
	.metadata({
		actionName: "sendEmail",
	})
	.schema(contactSchema)
	.action(async ({ parsedInput: { name, email, message } }) => {
		const mailOptions: Mail.Options = {
			from: process.env.EMAIL_USER,
			to: process.env.EMAIL_USER,
			subject: `Message from ${name}: ${email}`,
			text: message,
		};

		const info = await transport.sendMail(mailOptions);

		if (info.rejected.length > 0) {
			throw new Error("Email not sent. Please try again later.");
		}

		return {
			success: true,
		};
	});
