import { Injectable } from '@angular/core';
import { Item } from './Item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private url :string = "http://localhost:8000/api/"
  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]>{
    return this.http.get<Item[]>('${this.url}items/')
  }

  getItemById(id : number):Observable<Item>{
    return this.http.get<Item>('${this.url}items/${id}')
  }
  addItem(item:Item):Observable<Item>{
    return this.http.post<Item>('${this.url}items/',item)
  }
  updateItem(item:Item,id:number):Observable<Item>{
    return this.http.put<Item>('${this.url}items/${id}/',item)
  }
  deleteItemById(id:number):Observable<Item>{
    return this.http.delete<Item>('${this.url}items/${id}')
  }
}
