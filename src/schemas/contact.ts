import { z } from "zod";
export const contactSchema = z.object({
	name: z.string({
		required_error: "Name is required",
	}),
	email: z
		.string({
			required_error: "Email is required",
		})
		.email({
			message: "Invalid email address",
		}),
	message: z.string({
		required_error: "Message is required",
	}),
});

export type ContactSchema = z.infer<typeof contactSchema>;
