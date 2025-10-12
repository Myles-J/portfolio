import * as z from "zod";
export const contactSchema = z.object({
	name: z.string({
		error: "Name is required",
	}),
	email: z.email({
		message: "Invalid email address",
	}),
	message: z.string({
		error: "Message is required",
	}),
	recaptchaToken: z.string({
		error: "Recaptcha token is required",
	}),
});

export type ContactSchema = z.infer<typeof contactSchema>;
