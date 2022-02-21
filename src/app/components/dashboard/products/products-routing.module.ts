import { CreateComponent } from "./create/create.component";
import { LayoutComponent } from "./layout/layout.component";
import { SearchComponent } from "./search/search.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { CategoryComponent } from "./category/category.component";

const routes: Routes = [
	{
		path: "",
		component: LayoutComponent,
		children: [
			{ path: "", pathMatch: "full", redirectTo: "search" },
			{ path: "search", component: SearchComponent },
			{ path: "create", component: CreateComponent },
			{ path: "list", component: ListComponent },
			{ path: "categories", component: CategoryComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProductsRoutingModule {}
