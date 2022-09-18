import { Component, OnInit } from '@angular/core';
import {
  recipesBreakfast,
  recipesBreakfastHome,
  recipesDessertHome,
  recipesDinnerHome,
  recipesLunchHome
} from "../recipes";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  breakfast:any=recipesBreakfast;

  allRecipes:any=[...recipesBreakfastHome,...recipesLunchHome,...recipesDinnerHome,...recipesDessertHome];
  searchKey:string='';
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.search.subscribe((val:any)=>{
      this.searchKey=val;
    })
  }

}
