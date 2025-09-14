import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { ArticleService } from "./02_article/application";
import { ArticleRepositoryImpl } from "./02_article/infrastructure";
import { createArticleRoutes } from "./02_article/presentation";
import { CreateItemUsecase, UpdateItemUsecase } from "./03_item/application";
import { ItemDomainService } from "./03_item/domain";
import { ItemRepository } from "./03_item/infrastructure";
import {
	CreateItemResolver,
	createItemRoutes,
	UpdateItemResolver,
	updateItemRoutes,
} from "./03_item/presentation";
import { prisma } from "./utils/prisma/prismaClient";

const app = new Hono();

const articleRepository = new ArticleRepositoryImpl(prisma);
const articleService = new ArticleService(articleRepository);

const createItemResolver = new CreateItemResolver(
	new CreateItemUsecase(new ItemRepository()),
);
const updateItemResolver = new UpdateItemResolver(
	new UpdateItemUsecase(new ItemRepository(), new ItemDomainService()),
);

app.use("*", cors());

app.route("/", createArticleRoutes(articleService));
app.route("/", createItemRoutes(createItemResolver));
app.route("/", updateItemRoutes(updateItemResolver));

serve(
	{
		fetch: app.fetch,
		port: 5000,
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`);
	},
);
