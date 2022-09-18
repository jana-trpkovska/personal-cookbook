import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterPipe } from './filter.pipe';
import {SearchComponent} from "./search/search.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    routingComponents,
    RecipeCardComponent,
    RecipeDetailsComponent,
    FilterPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
