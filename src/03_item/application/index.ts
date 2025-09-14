import { type IItemRepository, Item, type ItemDomainService } from "../domain";

export class CreateItemUsecase {
	constructor(private repo: IItemRepository) {}
	execute(name: string, price: number) {
		const item = new Item(name, price);
		this.repo.update(item);
	}
}

export class UpdateItemUsecase {
	constructor(
		private repo: IItemRepository,
		private itemDomainService: ItemDomainService,
	) {}
	execute(_id: number, name: string, price: number) {
		// FIXME: 本当はデータベースから参照
		const item = new Item(name, price);
		this.itemDomainService.notChangeStatus(item);
		this.repo.create(item);
	}
}
