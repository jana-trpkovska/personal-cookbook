import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BreakfastComponent} from "./breakfast/breakfast.component";
import {LunchComponent} from "./lunch/lunch.component";
import {DinnerComponent} from "./dinner/dinner.component";
import {DessertComponent} from "./dessert/dessert.component";
import {ContactComponent} from "./contact/contact.component";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'breakfast', component: BreakfastComponent},
  {path: 'lunch', component: LunchComponent},
  {path: 'dinner', component: DinnerComponent},
  {path: 'dessert', component: DessertComponent},
  {path: 'contact', component: ContactComponent},
  {path:'recipe/:id', component: RecipeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,BreakfastComponent,LunchComponent,DinnerComponent,DessertComponent,ContactComponent,RecipeDetailsComponent]
