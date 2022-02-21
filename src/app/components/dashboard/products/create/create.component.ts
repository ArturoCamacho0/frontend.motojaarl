import { Product } from "./../../../../models/Product";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product/product.service";
import { CategoriesService } from "src/app/services/categories/categories.service";
import { FormArray, FormControl } from "@angular/forms";

@Component({
	selector: "app-create",
	templateUrl: "./create.component.html",
	styleUrls: ["./create.component.scss"],
	providers: [ProductService, CategoriesService]
})
export class CreateComponent implements OnInit, OnDestroy {
	public loading = false;
	public showError = false;
	public showSuccess = false;
	public showModal = false;
	public prices: FormArray;
	public categories: Array<any> = [];
	public product: Product;

	constructor(
		private productService: ProductService,
		private categoriesService: CategoriesService
	) {
		this.prices = new FormArray([
			new FormControl({
				id_form: 0,
				id: 1,
				price: 0
			})
		]);
		this.product = new Product("", "", "", 0, 0, 0, []);
	}

	ngOnInit(): void {
		this.getCategories();
	}

	ngOnDestroy() {
		this.loading = false;
		this.showError = false;
		this.showSuccess = false;
		this.showModal = false;
		this.categories = [];
	}

	onSubmit() {
		if (
			this.product.key == "" ||
			this.product.name == "" ||
			this.product.description == "" ||
			this.product.category_id == 0 ||
			this.prices.controls.map((x) => x.value.price).filter((x) => x <= 0)
				.length > 0
		) {
			this.showError = true;
		} else {
			this.loading = true;
			this.product.prices = this.prices.controls.map(
				(control) => control.value
			);

			this.productService
				.createProduct(JSON.parse(JSON.stringify(this.product)))
				.subscribe(
					(response) => {
						this.showSuccess = true;
            this.loading = false;
            
						this.product.clear();

						this.prices.clear();
						this.prices.push(
							new FormControl({
								id_form: 0,
								id: 1,
								price: 0
							})
						);
					},
					(error) => {
						this.loading = false;
						this.showError = true;
						console.error(error);
					}
				);
		}
	}

	addPrice() {
		this.prices.push(
			new FormControl({
				id_form: this.prices.length,
				id: 0,
				price: 0
			})
		);
	}

	deletePrice(id: number) {
		this.prices.removeAt(id);
	}

	getCategories() {
		this.categoriesService.getAllCategories().subscribe(
			(response) => {
				const res = JSON.parse(JSON.stringify(response));
				this.categories = res;
			},
			(error) => {
				console.error(error);
			}
		);
	}
}
