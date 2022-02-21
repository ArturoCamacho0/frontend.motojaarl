import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
export class CategoriesService {
	public url: string;
	public headers: HttpHeaders;

	constructor(private http: HttpClient) {
		this.url = environment.url;

		this.headers = new HttpHeaders({
			"Content-Type": "application/json",
			Authorization: "Bearer " + localStorage.getItem("token") || ""
		});
	}

	search(term: Observable<string>) {
		return term.pipe(
			debounceTime(400),
			distinctUntilChanged(),
			switchMap((term: any) => this.searchEntries(term))
		);
	}

	searchEntries(term: any) {
		return this.http
			.get(this.url + "categories/search/" + term, {
				headers: this.headers
			})
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}

	getAllCategories() {
		return this.http?.get(this.url + "categories", {
			headers: this.headers
		});
	}
}
