import Heading from "@/components/shared/Heading";
import ArticleList from "@/components/ui-components/ArticleList";
import CarouselComponent from "@/components/ui-components/CarouselComponent";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center gap-10 w-full">
			<CarouselComponent />
			<Heading
				title="Najnowsze artykuły"
				description="Przeglądaj to co działo się u nas w ostatnim czasie."
			/>
			<ArticleList />
		</div>
	);
}

