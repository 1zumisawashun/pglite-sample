import type { PrismaClient } from "../../utils/prisma/prismaClient";
import type { ArticleRepository } from "../domain";

export class ArticleRepositoryImpl implements ArticleRepository {
	constructor(private readonly prisma: PrismaClient) {}

	async findList() {
		return await this.prisma.article.findMany({
			include: { categories: true },
		});
	}

	async findById(articleId: string) {
		return await this.prisma.article.findUniqueOrThrow({
			where: { id: articleId },
			include: { categories: true },
		});
	}
}
