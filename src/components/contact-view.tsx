"use client";
import { socialLinkSVGs } from "src/utils/constants";
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

export const ContactView = () => {
	const form = useForm({
		resolver: zodResolver(contactSchema),
	});

	const onSubmit: SubmitHandler<ContactSchema> = async (formData) => {
    const {success, message} = await sendEmail(formData)
    !success ? toast.error(message) : toast.success(message)

  };
	return (
		<section id="contact">
			<h1 className="text-center w-75 mt-2">Contact</h1>
			<p className="text-center w-75 m-0">
				I am currently available for hire in Colorado, or remotely. I will
				respond to your message within 24 business hours.
			</p>
			<p className="text-center w-75 mb-3">
				You can also find me on
				{socialLinkSVGs.map(({ name, link }) => (
					<Link
						key={name}
						href={link}
						target="_blank"
						rel="noreferrer"
						className="mx-1 link-primary"
					>
						{name},
					</Link>
				))}
				<Link
					href="https://medium.com/@99mylesjefferson"
					target="_blank"
					rel="noreferrer"
					className="mx-1 link-primary"
				>
					Medium,
				</Link>
				or
				<Link
					href="mailto:99mylesjefferson@gmail.com"
					className="mx-1 link-primary"
				>
					email me directly.
				</Link>
			</p>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
