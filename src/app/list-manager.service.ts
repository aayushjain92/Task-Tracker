import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import {Item} from './listitem';
import {initItems} from './initial-list';


@Injectable()
export class ListManagerService {

  list: Item[];

  @Output() newItem: EventEmitter<Item> = new EventEmitter();

  constructor() {
    this.list = initItems;
   }

  getList():Observable<Item[]> {
    this.sortItems();
    this.updateIds();
    return of(initItems);
  }

  // addItem(item):Observable<boolean>{
    addItem(newvalue: String){
    let  nitem: Item = new Item();
    nitem.value = newvalue;
    nitem.id = this.list.length;
    nitem.status = false;  
    this.list.push(nitem);
     this.sortItems();
    this.updateIds();
    // this.newItem.emit(nitem);
    // return of(true);
  }

  removeItem(rmItem: Item):Observable<boolean>{
    this.list.splice(rmItem.id,1);
    this.sortItems();
    this.updateIds();
    return of(true);
  }

  setList(upList: Item[]): void{
    this.list = upList;
  }

  sortItems():void{
    this.list.sort(function(x,y){return Number(y.status)-Number(x.status);});
    this.list.reverse();
    // this.updateIds();
  }

  updateIds():void{
    // var eachItem : item;
    var x;
    for(x in this.list){
      this.list[x].id = x;
    }
  }

    changeStat(dItem: Item): void{
      dItem.status= !dItem.status;
      this.sortItems();
      this.updateIds();
    }
  }

