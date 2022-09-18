import { Component, OnInit } from '@angular/core';
import {recipesBreakfastHome, recipesDessertHome, recipesDinnerHome, recipesLunchHome} from "../recipes";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allRecipes:any=[...recipesBreakfastHome,...recipesLunchHome,...recipesDinnerHome,...recipesDessertHome];
  searchKey:string="";

  breakfastHome: any = recipesBreakfastHome;
  lunchHome:any = recipesLunchHome;
  dinnerHome:any=recipesDinnerHome;
  dessertHome:any=recipesDessertHome;

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.search.subscribe((val:any)=>{
      this.searchKey=val;
    })
  }

}
