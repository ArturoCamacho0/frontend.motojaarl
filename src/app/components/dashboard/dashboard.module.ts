import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";

// Components
import { HomeComponent } from "./home/home.component";
import { LayoutComponent } from "./layout/layout.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
	declarations: [HomeComponent, LayoutComponent, SidebarComponent],
	imports: [CommonModule, DashboardRoutingModule]
})
export class DashboardModule {}
