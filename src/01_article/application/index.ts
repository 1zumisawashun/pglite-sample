import type { PrismaClient } from "../../utils/prisma/prismaClient";
import { findDetail, findList } from "../infrastructure";

export class ArticleService {
	constructor(private readonly prisma: PrismaClient) {}

	async findList() {
		const response = await findList(this.prisma);
		return response;
	}

	async findDetail(teikyohyoId: string) {
		const response = await findDetail(this.prisma, teikyohyoId);
		if (!response) throw new Error("Teikyohyo not found");
		return response;
	}
}
