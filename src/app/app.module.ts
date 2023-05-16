import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddItemComponent } from './components/add-item/add-item.component';
import { UpdateItemComponent } from './components/update-item/update-item.component';
import { ViewItemsComponent } from './components/view-items/view-items.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
//import { SalesDashboardComponent } from './sales-dashboard/sales-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    
    AddItemComponent,
    UpdateItemComponent,
    ViewItemsComponent,
    // SalesDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
