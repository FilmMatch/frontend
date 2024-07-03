import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardItemComponent } from '../../components/card-item/card-item.component';
import { Item } from '../../objects/Item';
import { Observable } from 'rxjs';
import { PermisionChecker } from '../../utils/PermissionChecker';
import { ItemService } from '../../services/Item/item.service';
import { AsyncPipe } from '@angular/common';
import { AddItemComponent } from "../../components/modals/addItem/add-item/add-item.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, CardItemComponent, AsyncPipe, AddItemComponent]
})
export class HomeComponent {
  constructor(private permisionsChecker: PermisionChecker, public itemService: ItemService) {}
  ngOnInit(): void {
    this.permisionsChecker.base();
    this.loadItems();
  }
  addModalIsOpened = false;
  items$!: Observable<Item[]>;


  openModal() {
    this.addModalIsOpened = true;
  }
  closeModal() {
    this.addModalIsOpened = false;
  }

  loadItems() {
    this.items$ = this.itemService.getItems();
  }

}
