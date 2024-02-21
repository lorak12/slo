import Navbar from "@/components/shared/dashboard/Navbar";

export const metadata = {
	title: "SLO - Dashboard",
	description: "Panel Sterowania",
};

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navbar />
			<main className="flex min-h-screen flex-col items-center justify-between p-24 mt-[80px]">
				{children}
			</main>
		</>
	);
}

