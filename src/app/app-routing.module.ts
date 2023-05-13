import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ViewItemsComponent } from './components/view-items/view-items.component';
import { UpdateItemComponent } from './components/update-item/update-item.component';

const routes: Routes = [
  {path:'',component:ViewItemsComponent},
  {path:'add',component:AddItemComponent},
  {path:'update/:id',component:UpdateItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
