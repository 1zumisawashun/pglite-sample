import { Hono } from "hono";
import type { ArticleService } from "../application";

export const createArticleRoutes = (articleService: ArticleService) => {
	const app = new Hono();

	app.get("/article", async (c) => {
		const dto = await articleService.findList();
		return c.json({ data: dto }, 200);
	});

	app.get("/article/:articleId", async (c) => {
		const articleId = c.req.param("articleId");
		const dto = await articleService.findDetail(articleId);
		return c.json({ data: dto }, 200);
	});

	return app;
};
