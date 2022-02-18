import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

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
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
