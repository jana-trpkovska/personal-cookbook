import {Component, OnInit} from '@angular/core';
import {
  recipesBreakfast,
  recipesBreakfastHome, recipesDessert,
  recipesDessertHome, recipesDinner,
  recipesDinnerHome, recipesLunch,
  recipesLunchHome
} from "../recipes";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipeId:any;
  oneRecipe:any;
  recipes:any=[...recipesBreakfastHome,...recipesLunchHome,...recipesDinnerHome,...recipesDessertHome,...recipesBreakfast,...recipesLunch,...recipesDinner,...recipesDessert];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeId = Number(this.route.snapshot.params['id']);
    this.setRecipe();
  }

  setRecipe(){
    for(let rec of this.recipes){
      if(this.recipeId==rec.id){
        this.oneRecipe=rec;
      }
    }
  }

}
