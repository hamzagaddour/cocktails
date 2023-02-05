import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cocktail } from 'src/shared/interfaces/cocktails.interface';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.scss']
})
export class CocktailsListComponent {
  @Input() public cocktails?: Cocktail[];
  @Input() public selectedCocktail : Cocktail
  @Output() private changeCocktail: EventEmitter<number> = new EventEmitter<
    number
  >();

  constructor() {}

  ngOnInit(): void {}

  public selectCocktail(index: number): void {
    this.changeCocktail.emit(index);
  }
}
