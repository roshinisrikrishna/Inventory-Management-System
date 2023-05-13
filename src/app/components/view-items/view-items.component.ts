import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/Item';
import { ItemsService } from 'src/app/items.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent {

  items: any | undefined;

  constructor(private itemService : ItemsService){}
  ngOnInit():void{
    this.itemService.getItems().subscribe(data=>{
      this.items = data;
      console.log(data);
    });
  }
  deleteItem(id:number){
    this.itemService.deleteItemById(id).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
    })
  }

}
