import { Component, OnInit } from '@angular/core';
import {
  recipesBreakfast,
  recipesBreakfastHome,
  recipesDessertHome, recipesDinner,
  recipesDinnerHome, recipesLunch,
  recipesLunchHome
} from "../recipes";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.css']
})
export class DinnerComponent implements OnInit {
  dinner:any=recipesDinner;

  allRecipes:any=[...recipesBreakfastHome,...recipesLunchHome,...recipesDinnerHome,...recipesDessertHome];
  searchKey:string='';
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.search.subscribe((val:any)=>{
      this.searchKey=val;
    })
  }

}
