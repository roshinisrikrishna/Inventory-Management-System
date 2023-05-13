import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Item } from 'src/app/Item';
import { ItemsService } from 'src/app/items.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent {
  constructor(private itemService:ItemsService, private route:ActivatedRoute,private router:Router){}
  user ?: any
  data : any
  ngOnInit():void{
    let id = this.route.snapshot.params['id'];
    this.itemService.getItemById(id).subscribe(data=>{
      this.user = data
      console.log(this.user);
    });
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    cost_per_item : new FormControl('',Validators.required),
    quantity_in_stock : new FormControl('',Validators.required),
    // sales : new FormControl('',Validators.required),
    quantity_sold : new FormControl('',Validators.required),
    stock_date : new FormControl('',Validators.required),
    // last_sales_date : new FormControl('',Validators.required),
  })

  updateItem(){
    this.data = this.form.value
    this.user.name = this.data.name
    this.user.cost_per_item = this.data.cost_per_item
    this.user.quantity_in_stock = this.data.quantity_in_stock
    this.user.quantity_sold = this.data.quantity_sold
    this.user.stock_date = this.data.stock_date
    console.log(this.data)
    this.itemService.updateItem(this.user,this.user?.id).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/']);
    })
  }

}
