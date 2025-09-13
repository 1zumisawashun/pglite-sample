import type { PrismaClient } from "../../utils/prisma/prismaClient";

export const findList = async (prisma: PrismaClient) => {
	return await prisma.article.findMany({
		include: { categories: true },
	});
};

export const findDetail = async (prisma: PrismaClient, articleId: string) => {
	return await prisma.article.findUniqueOrThrow({
		where: { id: articleId },
		include: { categories: true },
	});
};
