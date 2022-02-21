import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../environments/environment";
import {
	debounceTime,
	distinctUntilChanged,
	map,
	Observable,
	switchMap
} from "rxjs";

@Injectable({
	providedIn: "root"
})
export class ProductService {
	public url: string;
	public headers: HttpHeaders;

	constructor(private http: HttpClient) {
		this.url = environment.url;

		this.headers = new HttpHeaders({
			"Content-Type": "application/json",
			Authorization: "Bearer " + localStorage.getItem("token")
		});
	}

	search(term: Observable<string>) {
		return term.pipe(
			debounceTime(400),
			distinctUntilChanged(),
			switchMap((term: string) => this.searchEntries(term))
		);
	}

	searchEntries(term: string) {
		return this.http
			.get(this.url + "products/search/" + term, {
				headers: this.headers
			})
			.pipe(
				map((res: Object) => {
					return res;
				})
			);
	}

	getAllProducts() {
		this.http.get(this.url + "products", { headers: this.headers });
	}

	getProductById(id: string) {
		this.http.get(this.url + "products/" + id, { headers: this.headers });
	}

	createProduct(product: JSON) {
		return this.http.post(this.url + "products", product, {
			headers: this.headers
		});
	}

	updateProduct(id: string, product: JSON) {
		return this.http.put(this.url + "products/" + id, product, {
			headers: this.headers
		});
	}
}
