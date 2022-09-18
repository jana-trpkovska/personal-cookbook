import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public search = new BehaviorSubject<string>("");

  constructor() { }

}
