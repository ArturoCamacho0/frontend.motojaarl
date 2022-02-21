import { LayoutComponent } from "./layout/layout.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// Components
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
	{ path: "", pathMatch: "full", redirectTo: "home" },
	{
		path: "",
		component: LayoutComponent,
		children: [
			{ path: "home", component: HomeComponent },
			{
				path: "products",
				loadChildren: () =>
					import("./products/products.module").then(
						(m) => m.ProductsModule
					)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule {}
