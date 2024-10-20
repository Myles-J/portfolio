"use server";

export const sendEmail = async () => {
	try {
		return {
			success: true,
			message: "Email sent successfully!",
		};
	} catch (error: unknown) {
		return {
			success: false,
			message:
				error instanceof Error
					? error.message
					: "An error occurred. Please try again later.",
		};
	}
};
