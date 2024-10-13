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
		<section id="contact">
			<h1 className="text-center text-4xl font-bold motion-preset-slide-right ">
				Get In Touch!
			</h1>
			<p className="text-center w-75 m-0">
				I am currently available for hire in Colorado, or remotely. I will
				respond to your message within 24 business hours.
			</p>
			<div>
				<p className="text-gray-500">Email</p>
				<Link href={"mailto:mylesjefferson.dev@gmail.com"}>
					mylesjefferson.dev@gmail.com
				</Link>
			</div>
			<p className="text-gray-500">Socials</p>
			<div className="flex flex-col justify-start items-center">
				{/* {socialLinkSVGs.map(({ name, link }) => (
					<Link
						key={name}
						href={link}
						target="_blank"
						rel="noreferrer"
						className="mx-1 text-teal-400 hover:text-teal-500"
					>
						{name},
					</Link>
				))} */}
				{socialLinks.map(({ name, link, Icon }) => (
					<Button key={name} variant={"link"} asChild>
						<Link href={link} target="_blank" rel="noreferrer">
							<Icon />
							{name}
						</Link>
					</Button>
				))}
			</div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8 w-[500px] mx-auto bg-slate-200 p-1 rounded shadow-lg"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="Enter your name" {...field} />
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
										placeholder="Enter your email"
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
									<Textarea placeholder="Enter your message" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>{" "}
					<Button type="submit" disabled={form.formState.isSubmitting}>
						Send Message
					</Button>
				</form>
			</Form>
		</section>
	);
};
