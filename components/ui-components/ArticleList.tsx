import React from "react";
import ArticleCard from "./ArticleCard";
import { ArticlePagination } from "./Pagination";

function ArticleList() {
	return (
		<div className="flex flex-col gap-10">
			<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 w-full place-content-center">
				{Array.from({ length: 5 }).map((_, index) => (
					<ArticleCard key={index} />
				))}
			</div>
			<ArticlePagination />
		</div>
	);
}

export default ArticleList;
