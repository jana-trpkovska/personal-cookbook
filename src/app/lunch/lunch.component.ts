import { Component, OnInit } from '@angular/core';
import {
  recipesBreakfast,
  recipesBreakfastHome,
  recipesDessertHome,
  recipesDinnerHome, recipesLunch,
  recipesLunchHome
} from "../recipes";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {
  lunch:any=recipesLunch;

  allRecipes:any=[...recipesBreakfastHome,...recipesLunchHome,...recipesDinnerHome,...recipesDessertHome];
  searchKey:string='';

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.search.subscribe((val:any)=>{
      this.searchKey=val;
    })
  }

}
