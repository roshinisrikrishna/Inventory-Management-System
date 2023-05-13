import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  constructor(private router:Router,private itemService:ItemsService){}
  ngOnInit():void{}
  
  data: any
  form = new FormGroup({
    name : new FormControl('',Validators.required),
    cost_per_item : new FormControl('',Validators.required),
    quantity_in_stock : new FormControl('',Validators.required),
    // sales : new FormControl('',Validators.required),
    quantity_sold : new FormControl('',Validators.required),
    // stock_date : new FormControl('',Validators.required),
    // last_sales_date : new FormControl('',Validators.required),

  });

  addItem(){
    this.data = this.form.value;
    this.itemService.addItem(this.data).subscribe(data=>{
      this.router.navigate(['/']);
    });
  }

}
