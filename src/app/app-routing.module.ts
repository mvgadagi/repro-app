import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SecondComponent } from "./second/second.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "second-component", component: SecondComponent },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
