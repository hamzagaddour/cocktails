import { CocktailService } from './../../shared/services/cocktail.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/interfaces/cocktails.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cocktails-container',
  templateUrl: './cocktails-container.component.html',
  styleUrls: ['./cocktails-container.component.scss']
})
export class CocktailsContainerComponent implements OnInit, OnDestroy{


  public cocktails: Cocktail[] = [];
  public selectedCocktail: Cocktail;

  public subcription : Subscription = new Subscription()

  constructor(private cocktailServoce : CocktailService) {}

  ngOnInit(): void {
    this.subcription = this.cocktailServoce.cocktails$.subscribe((cocktails : Cocktail[])=>{
      this.cocktails = cocktails
    })

    this.subcription.add(this.cocktailServoce.selectedCocktail$.subscribe((selectedCocktail : Cocktail)=>{
      this.selectedCocktail = selectedCocktail
    }))
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe()
  }
  public selectCocktail(index: number): void {
    this.cocktailServoce.selectCocktail(index)
  }
}
