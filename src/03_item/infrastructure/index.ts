import type { IItemRepository, Item } from "../domain";

export class ItemRepository implements IItemRepository {
	create(item: Item) {
		console.log(`データベースに${item.name}を登録`);
	}
	update(item: Item) {
		console.log(`データベースの${item.id}を更新`);
	}
}
