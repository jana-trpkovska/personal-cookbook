import {Component, OnInit} from '@angular/core';
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchTerm:string="";
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.recipeService.search.next(this.searchTerm);
  }
}
