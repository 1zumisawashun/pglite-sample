import type { Prisma } from "../generated/prisma";

export type ArticleListResponse = Prisma.ArticleGetPayload<{
	include: {
		categories: true;
	};
}>;

export type ArticleDetailResponse = Prisma.ArticleGetPayload<{
	where: {
		id: string;
	};
	include: { categories: true };
}>;
