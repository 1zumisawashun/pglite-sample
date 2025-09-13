import type { ArticleDetailResponse, ArticleListResponse } from "../types";

export interface ArticleRepository {
	findList(): Promise<ArticleListResponse[]>;
	findById(id: string): Promise<ArticleDetailResponse | null>;
}
