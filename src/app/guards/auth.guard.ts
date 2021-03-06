import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	RouterStateSnapshot,
	UrlTree
} from "@angular/router";
import { map, Observable } from "rxjs";
import { UserService } from "../services/user/user.service";
import { Router } from "@angular/router";

@Injectable({
	providedIn: "root"
})
export class AuthGuard implements CanActivate {
	constructor(private userService: UserService, private router: Router) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		if (localStorage.getItem("token")) {
			return true;
		} else {
			return false;
		}
	}
}
