"use server";
import { safeAction } from "@/lib/safe-action";
import { gmailMail, googleCaptcha } from "../../adapters";
import { contactActionSchema } from "../../schema";
import { submitContact } from "../../submit";

export const sendEmail = safeAction
	.metadata({
		actionName: "sendEmail",
	})
	.inputSchema(contactActionSchema)
	.action(async ({ parsedInput: { recaptchaToken, ...message } }) =>
		submitContact(message, recaptchaToken, {
			captcha: googleCaptcha,
			mail: gmailMail,
		}),
	);
