"use client";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
	contactSchema,
	type ContactSchema,
} from "@/features/contact/schema/contact";
import {
	Form,
	FormControl,
	FormLabel,
	FormField,
	FormMessage,
	FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/features/contact/server/actions/send-email";
import { Github, Linkedin, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
	{
		name: "GitHub",
		link: "https://github.com/Myles-J",
		Icon: Github,
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/in/mylesjefferson/",
		Icon: Linkedin,
	},
];

export const ContactView = () => {
	const form = useForm({
		resolver: zodResolver(contactSchema),
	});

	const onSubmit: SubmitHandler<ContactSchema> = async (formData) => {
		const res = await sendEmail(formData);

		if (res?.serverError) {
			toast.error(res.serverError);
			return;
		}

		toast.success("Email sent successfully!");
	};
	return (
		<section id="contact" className="p-3">
			<motion.h1
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-5xl font-bold tracking-tight"
			>
				Get In Touch
			</motion.h1>
			<motion.p
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				Have a question or want to work together? Send me a message and I'll get
				back to you as soon as possible.
			</motion.p>

			<motion.div
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="flex flex-col-reverse md:flex-row gap-1 min-w-full"
			>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4 flex-1"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input placeholder="John Doe" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>{" "}
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											type="email"
											placeholder="example@example.com"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>{" "}
						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Message</FormLabel>
									<FormControl>
										<Textarea placeholder="Hello World!" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>{" "}
						<Button type="submit" disabled={form.formState.isSubmitting}>
							{form.formState.isSubmitting ? (
								<div className="inline-flex items-center gap-1">
									<Loader2 className="animate-spin" />
									Submitting...
								</div>
							) : (
								"Submit"
							)}
						</Button>
					</form>
				</Form>
				<div className="flex flex-col justify-start items-start">
					<p className="text-slate-500">Email</p>
					<Link
						href={"mailto:mylesjefferson.dev@gmail.com"}
						className="hover:underline"
					>
						mylesjefferson.dev@gmail.com
					</Link>
					<p className="text-slate-500">Socials</p>
					{socialLinks.map(({ name, link, Icon }) => (
						<Link
							key={name}
							href={link}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center justify-start gap-1 hover:underline"
						>
							<Icon size={16} />
							{name}
						</Link>
					))}
				</div>
			</motion.div>
		</section>
	);
};
