export class Product {
	key: string;
	name: string;
	description: string;
	stock: number;
	minimum: number;
	category_id: number;
	prices: Array<JSON>;

	constructor(
		key: string,
		name: string,
		description: string,
		stock: number,
		minimum: number,
		category_id: number,
		prices: Array<JSON>
	) {
		this.key = key;
		this.name = name;
		this.description = description;
		this.stock = stock;
		this.minimum = minimum;
		this.category_id = category_id;
		this.prices = prices;
	}

  public clear(){
    this.key = '';
    this.name = '';
    this.description = '';
    this.stock = 0;
    this.minimum = 0;
    this.category_id = 0;
    this.prices = [];
  }
}
