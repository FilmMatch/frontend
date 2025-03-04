import { Component, Input } from '@angular/core';
import { Item } from '../../objects/Item';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent {
  @Input() item!: Item;

}
