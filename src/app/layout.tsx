import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const fontSans = Geist({
	variable: "--font-sans",
	subsets: ["latin"],
});

const fontMono = Geist_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
});

const APP_NAME = "Myles Jefferson Portfolio";
const APP_DEFAULT_TITLE = "Myles Jefferson Portfolio";
const APP_TITLE_TEMPLATE = "%s - Myles Jefferson Portfolio";
const APP_DESCRIPTION = "Myles Jefferson Portfolio";

export const metadata: Metadata = {
	applicationName: APP_NAME,
	title: {
		default: APP_DEFAULT_TITLE,
		template: APP_TITLE_TEMPLATE,
	},
	description: APP_DESCRIPTION,
	metadataBase: new URL("https://mylesjefferson.com"),
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${fontSans.variable} ${fontMono.variable} antialiased`}
		>
			<body className="bg-black font-sans text-white">
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem={false}
					disableTransitionOnChange
				>
					<Header />
					<main className="min-h-screen">{children}</main>
					<Footer />
				</ThemeProvider>
				<Toaster
					richColors
					theme="dark"
					closeButton
					position="top-right"
					style={{
						fontSize: "16px",
					}}
				/>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
