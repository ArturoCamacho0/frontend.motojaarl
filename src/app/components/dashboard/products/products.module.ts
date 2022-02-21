import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";
import { CreateComponent } from "./create/create.component";
import { LayoutComponent } from "./layout/layout.component";
import { SearchComponent } from "./search/search.component";
import { ListComponent } from "./list/list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CategoryComponent } from "./category/category.component";

@NgModule({
	declarations: [
		CreateComponent,
		LayoutComponent,
		SearchComponent,
		ListComponent,
		CategoryComponent
	],
	imports: [
		CommonModule,
		ProductsRoutingModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class ProductsModule {}
