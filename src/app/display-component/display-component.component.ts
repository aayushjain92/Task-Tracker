import { Component, OnInit } from '@angular/core';
import {item} from '../listitem';
import {ListManagerService} from '../list-manager.service';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.scss']
})
export class DisplayComponentComponent implements OnInit {

  listItems : item[];

  constructor(private listManage: ListManagerService) { }

  ngOnInit() {
    this.getList();
    // this.listManage.newItem.subscribe(nitem => {this.listItems.push(nitem);
    //                                               this.updateIds();});
  }

  getList(): void {
    // this.listItems = this.listManage.getList();
    this.listManage.getList()
    .subscribe(list=> this.listItems = list);
    // this.sortItems();
    // this.updateIds();
  }

  done(dItem: item): void{
      // dItem.status= !dItem.status;
      this.listManage.changeStat(dItem);
      // this.sortItems();
      // this.updateIds();
  }

  sortItems():void{
    this.listItems.sort(function(x,y){return Number(y.status)-Number(x.status);});
    this.listItems.reverse();
    // this.updateIds();
  }

  remove(rmItem:item): void{
      this.listManage.removeItem(rmItem);
      // .subscribe(data => {if(data === true){this.updateIds(); }}
  // );
      // this.sortItems();
      // this.updateIds();
  }

  updateIds():void{
    // var eachItem : item;
    var x;
    for(x in this.listItems){
      this.listItems[x].id = x;
    }
    // this.sortItems();
    this.listManage.setList(this.listItems);
  }

}
