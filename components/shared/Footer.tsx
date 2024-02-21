import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
	return (
		<footer className="bg-white dark:bg-gray-900">
			<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<Link
							href={"/"}
							className="flex items-center">
							<Image
								src={"/logo.svg"}
								alt="Logo"
								width={32}
								height={32}
								className="mr-2"
							/>
							<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
								SLO Stalowa Wola
							</span>
						</Link>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
								Kontakt
							</h2>
							<ul className="text-gray-500 dark:text-gray-400 font-medium">
								<li className="mb-2">
									<span>37-450 Stalowa Wola</span>
								</li>
								<li className="mb-2">
									<span>ul. Wojska Polskiego 9</span>
								</li>
								<li className="mb-2">
									<span>tel. 15 844 87 16 lub </span>
								</li>
								<li className="mb-2">
									<span> tel./fax 15 842 18 89</span>
								</li>
								<li>
									<span>sekretariat@slosw.pl</span>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
								Edukacja
							</h2>
							<ul className="text-gray-500 dark:text-gray-400 font-medium">
								<li className="mb-2">
									<Link
										href="https://github.com/themesberg/flowbite"
										className="hover:underline ">
										Serwis Rzeczypospolitej Polskiej
									</Link>
								</li>
								<li className="mb-2">
									<Link
										href="https://github.com/themesberg/flowbite"
										className="hover:underline ">
										KO Rzeszów
									</Link>
								</li>
								<li className="mb-2">
									<Link
										href="https://github.com/themesberg/flowbite"
										className="hover:underline ">
										OKE Kraków
									</Link>
								</li>
								<li className="mb-2">
									<Link
										href="https://github.com/themesberg/flowbite"
										className="hover:underline ">
										Perspektywy
									</Link>
								</li>
								<li className="mb-2">
									<Link
										href="https://github.com/themesberg/flowbite"
										className="hover:underline ">
										Ośrodek Rozwoju Edukacji
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
								Nasze Miasto
							</h2>
							<ul className="text-gray-500 dark:text-gray-400 font-medium">
								<li className="mb-2">
									<Link
										href="#"
										className="hover:underline">
										UM Stalowa Wola
									</Link>
								</li>
								<li className="mb-2">
									<Link
										href="#"
										className="hover:underline">
										Muzeum Regionalne
									</Link>
								</li>
								<li className="mb-2">
									<Link
										href="#"
										className="hover:underline">
										MDK Stalowa Wola
									</Link>
								</li>
								<li className="mb-2">
									<Link
										href="#"
										className="hover:underline">
										MOSIR
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<div className="sm:flex sm:items-center sm:justify-between">
					<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© 2024{" "}
						<a
							href="https://flowbite.com/"
							className="hover:underline">
							SLOSW™
						</a>
						. Wszystkie prawa zastrzeżone.
					</span>
					<div className="flex mt-4 sm:justify-center sm:mt-0">
						<Link
							href="#"
							className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
							<FaFacebookF />
							<span className="sr-only">Facebook page</span>
						</Link>
						<Link
							href="#"
							className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
							<FaXTwitter />
							<span className="sr-only">Twitter page</span>
						</Link>
						<Link
							href="#"
							className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
							<FaTiktok />
							<span className="sr-only">TikTok page</span>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
