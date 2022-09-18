import { Component, OnInit } from '@angular/core';
import {
  recipesBreakfast,
  recipesBreakfastHome, recipesDessert,
  recipesDessertHome, recipesDinner,
  recipesDinnerHome, recipesLunch,
  recipesLunchHome
} from "../recipes";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent implements OnInit {
  dessert:any=recipesDessert;

  allRecipes:any=[...recipesBreakfastHome,...recipesLunchHome,...recipesDinnerHome,...recipesDessertHome];
  searchKey:string='';
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.search.subscribe((val:any)=>{
      this.searchKey=val;
    })
  }

}
