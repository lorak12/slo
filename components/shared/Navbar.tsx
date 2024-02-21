"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { UserButton } from "@clerk/nextjs";
import ThemeSwitcher from "./ThemeSwitcher";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
	{
		title: "E Dziennik",
		href: "https://uonetplus.vulcan.net.pl/gminastalowawola",
		description:
			"Platforma z elektronicznym dziennikiem ucznia, ocenami i frekwencją.",
	},
	{
		title: "Matura",
		href: "/matura",
		description:
			"Sekcja z informacjami, materiałami i poradami dotyczącymi egzaminu maturalnego.",
	},
	{
		title: "Samorząd Uczniowski",
		href: "/samorzad-uczniowski",
		description:
			"Informacje o samorządzie uczniowski, projektach i wydarzeniach uczniowskich.",
	},
	{
		title: "Kalendarz Roku Szkolnego",
		href: "/kalendarz",
		description:
			"Kalendarz z datami i wydarzeniami związanymi z rokiem szkolnym.",
	},
	{
		title: "Plan Lekcji",
		href: "http://mt.slosw.pl/plan/12II2024/",
		description: "Harmonogram lekcji przedstawiający strukturę dnia szkolnego.",
	},
	{
		title: "Zastępstwa",
		href: "/zastepstwa",
		description:
			"Informacje o zmianach w planie lekcji i zastępstwach nauczycieli.",
	},
];

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between py-6 border-b px-12 fixed w-full top-0 z-50 bg-background">
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link
							href="/"
							legacyBehavior
							passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								<Image
									src={"/logo.svg"}
									alt="Logo"
									width={32}
									height={32}
									className="mr-2"
								/>
								<span>SLO Stalowa Wola</span>
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuTrigger>Szkoła</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
								<li className="row-span-4">
									<NavigationMenuLink asChild>
										<a
											className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
											href="/">
											<Image
												src={"/logo.svg"}
												alt="Logo"
												width={32}
												height={32}
											/>
											<div className="mb-2 mt-4 text-lg font-medium">
												Samorządowe Liceum Ogólnokształcące im. Cypriana Kamila
												Norwida w Stalowej Woli
											</div>
										</a>
									</NavigationMenuLink>
								</li>
								<ListItem
									href="/nauczyciele"
									title="Nauczyciele">
									Lista nauczycieli.
								</ListItem>
								<ListItem
									href="/dokumenty"
									title="Dokumenty">
									Wszystkie dokumenty związane ze szkołą.
								</ListItem>
								<ListItem
									href="/rekrutacja"
									title="Rekrutacja">
									Rekrutacja do SLO na rok szkolny 2024/2025.
								</ListItem>
								<ListItem
									href="/dashboard"
									title="Logowanie">
									Logowanie do systemu.
								</ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Uczeń</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
								{components.map((component) => (
									<ListItem
										key={component.title}
										title={component.title}
										href={component.href}>
										{component.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link
							href="https://uonetplus.vulcan.net.pl/gminastalowawola"
							legacyBehavior
							passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Dziennik
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link
							href="/komunikaty"
							legacyBehavior
							passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Komunikaty
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<div className="flex items-center gap-8">
				<ThemeSwitcher />
				<UserButton />
			</div>
		</nav>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
