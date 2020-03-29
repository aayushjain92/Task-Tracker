import { Component, OnInit } from '@angular/core';
import {item} from '../listitem';
import { ListManagerService} from '../list-manager.service';
import { DisplayComponentComponent } from '../display-component/display-component.component';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss']
})
export class InputComponentComponent implements OnInit {

  constructor(private listManage:ListManagerService) { }

  ngOnInit() {
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.listManage.addItem(name);
    // var ip = document.getElementById('item');
}

}
