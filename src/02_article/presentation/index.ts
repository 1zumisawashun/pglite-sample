import { Hono } from "hono";
import type { ArticleService } from "../application";

/**
 * NOTE:
 * presentation層はapplication層のサービスのみを呼び出す
 * DTOやViewModelでレスポンスを返す
 * エラーハンドリングや認可はpresentation層で行う
 */
export const createArticleRoutes = (articleService: ArticleService) => {
	const app = new Hono();

	app.get("/article", async (c) => {
		try {
			const dto = await articleService.findList();
			return c.json({ data: dto }, 200);
		} catch (error) {
			return c.json({ error }, 500);
		}
	});

	app.get("/article/:articleId", async (c) => {
		try {
			const articleId = c.req.param("articleId");
			const dto = await articleService.findDetail(articleId);
			return c.json({ data: dto }, 200);
		} catch (error) {
			return c.json({ error }, 500);
		}
	});

	return app;
};
