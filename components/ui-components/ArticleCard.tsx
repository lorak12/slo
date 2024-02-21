import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";

function ArticleCard() {
	return (
		<div className="flex items-center justify-center">
			<Card className="max-w-[450px] aspect-[4/3] justify-between flex flex-col">
				<CardHeader>
					<CardTitle>Article Title</CardTitle>
					<CardDescription className="flex justify-between">
						<span>20 Stycznia 2024</span>
						<span>Wyświetlenia: 156</span>
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-4 ">
					<div className="relative w-full aspect-square object-cover">
						<Image
							src={"https://picsum.photos/1200/1200"}
							alt={"Image"}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
					<p className="line-clamp-4">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
						corporis veritatis minus consequatur accusamus. Esse officiis itaque
						deserunt atque, provident a totam nobis accusamus sequi, voluptate
						tempora molestias, non voluptatibus possimus cum praesentium. Eaque
						deserunt doloribus facilis expedita adipisci quia, dolorum porro
						voluptatem alias commodi nemo iusto natus debitis sed?
					</p>
				</CardContent>
				<CardFooter>
					<Button>Czytaj więcej</Button>
				</CardFooter>
			</Card>
		</div>
	);
}

export default ArticleCard;
