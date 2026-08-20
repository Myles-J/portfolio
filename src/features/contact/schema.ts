import * as z from "zod";

export const contactSchema = z.object({
	name: z.string({
		error: "Name is required",
	}),
	email: z.email(),
	message: z.string({
		error: "Message is required",
	}),
});

export type ContactMessage = z.infer<typeof contactSchema>;

export const contactActionSchema = contactSchema.extend({
	recaptchaToken: z.string({
		error: "Recaptcha token is required",
	}),
});
