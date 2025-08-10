import "server-only";
import { env } from "@/lib/env";

export const isRecaptchaValid = async (token: string) => {
	const response = await fetch(
		`https://www.google.com/recaptcha/api/siteverify?secret=${env.RECAPTCHA_SECRET_KEY}&response=${token}`,
	);

	if (!response.ok) {
		return false;
	}

	const data = (await response.json()) as { success: boolean; score: number };
	return data.success;
};
