import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../../../services/user/user.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
	providers: [UserService]
})
export class LoginComponent implements OnInit {
	public user = JSON.parse(
		JSON.stringify({
			nickname: "",
			password: ""
		})
	);
	public loading = false;
	public error = false;

	constructor(private userService: UserService, private router: Router) {}

	ngOnInit(): void {
		if (localStorage.getItem("token")) {
			this.router.navigate(["/dashboard"]);
		}
	}

	login() {
		this.loading = true;

		this.userService.login(this.user).subscribe({
			next: (response) => {
				const res = JSON.parse(JSON.stringify(response));
				if (res.token && res.user) {
					localStorage.setItem("token", res.token);
					localStorage.setItem(
						"user",
						JSON.parse(JSON.stringify(res.user))
					);
					this.loading = false;
					this.router.navigate(["/dashboard"]);
				}
			},
			error: (error) => {
				this.loading = false;
				this.error = true;
				console.error(error);

				setTimeout(() => {
					this.error = false;
				}, 6000);
			}
		});
	}
}
