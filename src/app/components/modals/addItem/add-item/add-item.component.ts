import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../../../objects/Item';
import { CustomNavigation } from '../../../../utils/CustomNavigation';
import { ItemService } from '../../../../services/Item/item.service';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  constructor(
    public customNavigation: CustomNavigation,
    public itemService: ItemService,

  ) {}
  @Output() reresh = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }

  addItem(name: string, description: string, price: string){
    let newPrice = parseInt(price);
    this.itemService.addItem(name, description, newPrice, 0).subscribe((res: Item | undefined) => {
      if (res) {
        this.closeModal();
        this.reresh.emit();
      }

    })
      
  }
}
