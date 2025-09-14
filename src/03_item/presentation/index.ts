import { Hono } from "hono";
import type { CreateItemUsecase, UpdateItemUsecase } from "../application";

type Item = {
	name: string;
	price: number;
};

// ROUTES
export const createItemRoutes = (createItemResolver: CreateItemResolver) => {
	const app = new Hono();

	app.post("/item/create", async (c) => {
		const { name, price } = (await c.req.json()) as Item;
		const dto = await createItemResolver.createItem(name, price);
		return c.json({ data: dto }, 200);
	});

	return app;
};

export const updateItemRoutes = (updateItemResolver: UpdateItemResolver) => {
	const app = new Hono();

	app.post("/item/:itemId/edit", async (c) => {
		const itemId = Number(c.req.param("itemId"));
		const { name, price } = (await c.req.json()) as Item;
		const dto = await updateItemResolver.updateItem(itemId, name, price);
		return c.json({ data: dto }, 200);
	});

	return app;
};

// RESOLVER（CONTROLLER）
export class CreateItemResolver {
	constructor(private createItemUsecase: CreateItemUsecase) {}
	createItem(name: string, price: number) {
		// TODO: 本当はInputを定義

		const _usecase = this.createItemUsecase.execute(name, price);

		// TODO: 本当はOutputを定義
	}
}

export class UpdateItemResolver {
	constructor(private updateItemUsecase: UpdateItemUsecase) {}
	updateItem(id: number, name: string, price: number) {
		// TODO: 本当はInputを定義

		const _usecase = this.updateItemUsecase.execute(id, name, price);

		// TODO: 本当はOutputを定義
	}
}
