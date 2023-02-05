import { Component, Input } from '@angular/core';
import { Cocktail } from 'src/shared/interfaces/cocktails.interface';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.scss']
})
export class CocktailsDetailsComponent {
  @Input() cocktail!: Cocktail;
  constructor() {}

  ngOnInit(): void {}
}
