import { SelectedDirective } from './../shared/directives/selected.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailsContainerComponent } from './cocktails-container/cocktails-container.component';
import { CocktailsDetailsComponent } from './cocktails-container/cocktails-details/cocktails-details.component';
import { CocktailsListComponent } from './cocktails-container/cocktails-list/cocktails-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailsContainerComponent,
    CocktailsDetailsComponent,
    CocktailsListComponent,
    SelectedDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
