import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
	{
		path: "",
		redirectTo: "auth",
		pathMatch: "full"
	},
	{
		path: "auth",
		loadChildren: () =>
			import("./components/auth/auth.module").then((m) => m.AuthModule)
	},
	{
		path: "dashboard",
		loadChildren: () =>
			import("./components/dashboard/dashboard.module").then(
				(m) => m.DashboardModule
			),
		canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
