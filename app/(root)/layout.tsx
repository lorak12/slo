import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar />
			<main className="flex min-h-screen flex-col items-center justify-between p-24 mt-[80px]">
				{children}
			</main>
			<Footer />
		</>
	);
}
