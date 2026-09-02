"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import {
	GoogleReCaptchaProvider,
	useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { env } from "@/lib/env";
import { type ContactMessage, contactSchema } from "../schema";
import { sendEmail } from "../server/actions/send-email";

const ContactFormFields = () => {
	const { executeRecaptcha } = useGoogleReCaptcha();
	const form = useForm({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	const onSubmit: SubmitHandler<ContactMessage> = async (message) => {
		if (!executeRecaptcha) {
			toast.error("Recaptcha is not ready. Please try again.");
			return;
		}

		const recaptchaToken = await executeRecaptcha("contact");
		if (!recaptchaToken) {
			toast.error("Recaptcha failed. Please try again.");
			return;
		}
		const res = await sendEmail({ ...message, recaptchaToken });

		if (res?.serverError) {
			toast.error(res.serverError);
			return;
		}

		toast.success("Email sent successfully!");
		form.reset();
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-4 sm:space-y-6"
			>
				<div className="grid gap-4 sm:gap-6 md:grid-cols-2">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="flex items-center gap-1 text-sm text-white sm:text-base">
									Name
									<span className="text-red-500 text-xs">*</span>
								</FormLabel>
								<FormControl>
									<Input
										placeholder="John Doe"
										{...field}
										className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="flex items-center gap-1 text-sm text-white sm:text-base">
									Email
									<span className="text-red-500 text-xs">*</span>
								</FormLabel>
								<FormControl>
									<Input
										type="email"
										placeholder="example@example.com"
										{...field}
										className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="flex items-center gap-1 text-sm text-white sm:text-base">
								Message
								<span className="text-red-500 text-xs">*</span>
							</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Tell me about your project..."
									{...field}
									rows={5}
									className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type="submit"
					disabled={form.formState.isSubmitting}
					className="w-full bg-green-400 text-black hover:bg-green-500 disabled:opacity-50"
				>
					{form.formState.isSubmitting ? (
						<div className="flex items-center space-x-2">
							<Loader2 className="h-4 w-4 animate-spin" />
							<span>Sending...</span>
						</div>
					) : (
						"Send Message"
					)}
				</Button>
			</form>
		</Form>
	);
};

export const ContactForm = () => (
	<GoogleReCaptchaProvider reCaptchaKey={env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
		<ContactFormFields />
	</GoogleReCaptchaProvider>
);
