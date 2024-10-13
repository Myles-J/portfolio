"use client";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { contactSchema, type ContactSchema } from "@/schemas/contact";
import {
	Form,
	FormControl,
	FormLabel,
	FormField,
	FormMessage,
	FormItem,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { Textarea } from "./ui/textarea";
import { sendEmail } from "@/actions/send-email";
import { Github, Linkedin } from "lucide-react";

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
		const { success, message } = await sendEmail(formData);
		!success ? toast.error(message) : toast.success(message);
	};
	return (
		<section id="contact" className="px-3">
			<h1 className=" text-4xl font-bold motion-preset-slide-right ">
				Get In Touch!
			</h1>
			<p className="text-gray-500">
				Have a question or want to work together? Send me a message and I'll get
				back to you as soon as possible.
			</p>

			<div className="flex flex-col-reverse md:flex-row gap-3">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8 flex-1"
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
							Submit
						</Button>
					</form>
				</Form>
				<div className="flex flex-col justify-start items-start">
					<p className="text-gray-500">Email</p>
					<Link
						href={"mailto:mylesjefferson.dev@gmail.com"}
						className="hover:underline"
					>
						mylesjefferson.dev@gmail.com
					</Link>
					<p className="text-gray-500">Socials</p>
					{socialLinks.map(({ name, link, Icon }) => (
						<Link
							key={name}
							href={link}
							target="_blank"
							rel="noreferrer"
							className="flex items-center justify-start hover:underline"
						>
							<Icon size={16} />
							{name}
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};
