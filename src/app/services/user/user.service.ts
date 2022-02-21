import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
	providedIn: "root"
})
export class UserService {
	public url: string;
	public headers: HttpHeaders;
	public user: JSON | null;
	public token: string | null;

	constructor(private http: HttpClient) {
		this.url = environment.url;

		this.user = localStorage.getItem("user")
			? JSON.parse(JSON.stringify(localStorage.getItem("user")))
			: null;

		this.token = localStorage.getItem("token")
			? localStorage.getItem("token")
			: null;

		this.headers = new HttpHeaders({
			"Content-Type": "application/json",
			Authorization: "Bearer " + this.token
		});
	}

	// Login user
	public login(user: JSON) {
		return this.http.post(`${this.url}login`, user, {
			headers: this.headers
		});
	}

	// Logout user
	public logout() {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		this.user = null;
		this.token = null;
	}
}
