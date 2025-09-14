// 仕様
// 商品名 10文字以内
// 値段 100〜10000円
// ステータス 一度完了にしたら、変更することができない

const Status = {
	WAITING: "waiting",
	COMPLATED: "complated",
} as const;
type StatusType = (typeof Status)[keyof typeof Status];

export class Item {
	private _id: number;
	private _name: string;
	private _price: number;
	private _status: StatusType;
	constructor(name: string, price: number) {
		this._id = Math.random();
		if (name.length >= 10) {
			throw new Error("商品名は10文字以内です");
		}
		if (price < 100 || price > 10000) {
			throw new Error("値段は100〜10000円です");
		}
		this._name = name;
		this._price = price;
		this._status = Status.WAITING;
	}
	get id() {
		return this._id;
	}
	get name() {
		return this._name;
	}
	get price() {
		return this._price;
	}
	get status() {
		return this._status;
	}
	complate() {
		this._status = Status.COMPLATED;
	}
}

export class ItemDomainService {
	notChangeStatus(item: Item) {
		if (item.status === Status.COMPLATED) {
			throw new Error("一度完了にしたら、変更することができません");
		}
	}
}

export interface IItemRepository {
	create(item: Item): void;
	update(item: Item): void;
}
