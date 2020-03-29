import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import {item} from './listitem';
import {initItems} from './initial-list';


@Injectable()
export class ListManagerService {

  list: item[];

  @Output() newItem: EventEmitter<item> = new EventEmitter();

  constructor() {
    this.list = initItems;
   }

  getList():Observable<item[]> {
    this.sortItems();
    this.updateIds();
    return of(initItems);
  }

  // addItem(item):Observable<boolean>{
    addItem(newvalue: String){
    let  nitem: item = new item();
    nitem.value = newvalue;
    nitem.id = this.list.length;
    nitem.status = false;  
    this.list.push(nitem);
     this.sortItems();
    this.updateIds();
    // this.newItem.emit(nitem);
    // return of(true);
  }

  removeItem(rmItem: item):Observable<boolean>{
    this.list.splice(rmItem.id,1);
    this.sortItems();
    this.updateIds();
    return of(true);
  }

  setList(upList: item[]): void{
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

    changeStat(dItem: item): void{
      dItem.status= !dItem.status;
      this.sortItems();
      this.updateIds();
    }
  }

