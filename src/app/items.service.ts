import { Injectable } from '@angular/core';
import { Item } from './Item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private url :string = "http://localhost:8000/api/items/";
  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]>{
    return this.http.get<Item[]>(this.url);
  }

  getItemById(id:number):Observable<Item>{
    return this.http.get<Item>(`${this.url}${id}`);
  }
  
  addItem(item:Item):Observable<Item>{
    return this.http.post<Item>(this.url,item);
  }
  updateItem(item:Item, id:number):Observable<Item>{
    return this.http.put<Item>(`${this.url}${id}/`,item);
  }
  
  deleteItemById(id:number):Observable<Item>{
    return this.http.delete<Item>(`${this.url}${id}/`)
  }
}