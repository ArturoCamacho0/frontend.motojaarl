import { CategoriesService } from "./../../../../services/categories/categories.service";
import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Component({
	selector: "app-category",
	templateUrl: "./category.component.html",
	styleUrls: ["./category.component.scss"],
	providers: [CategoriesService]
})
export class CategoryComponent implements OnInit {
	categories: any;
	searchTerm$ = new Subject<string>();
	loading = false;

	eventKeyUp(event: any) {
		this.searchTerm$.next(event.target.value);
	}

	constructor(private categoryService: CategoriesService) {
		this.categoryService.search(this.searchTerm$).subscribe(
			(results) => {
				this.categories = results;
				this.loading = false;
			},
			(error) => {
				this.loading = false;
				console.error(error);
			}
		);
	}

	ngOnInit(): void {}
}
