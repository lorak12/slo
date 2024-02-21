import { SignIn } from "@clerk/nextjs";
import React from "react";

const Page = () => {
	return (
		<main className="min-h-screen grid place-content-center">
			<SignIn />
		</main>
	);
};

export default Page;
