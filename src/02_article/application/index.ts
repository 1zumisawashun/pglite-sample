import type { ArticleRepository } from "../domain";

export class ArticleService {
	constructor(private readonly repository: ArticleRepository) {}

	async findList() {
		const response = await this.repository.findList();
		return response;
	}

	async findDetail(teikyohyoId: string) {
		const response = await this.repository.findById(teikyohyoId);
		if (!response) throw new Error("Teikyohyo not found");
		return response;
	}
}
