import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { ArticleService } from "./02_article/application";
import { ArticleRepositoryImpl } from "./02_article/infrastructure";
import { createArticleRoutes } from "./02_article/presentation";
import { prisma } from "./utils/prisma/prismaClient";

const app = new Hono();

const articleRepository = new ArticleRepositoryImpl(prisma);
const articleService = new ArticleService(articleRepository);

app.use("*", cors());

app.route("/", createArticleRoutes(articleService));

serve(
	{
		fetch: app.fetch,
		port: 5000,
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`);
	},
);
