import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-component',
  templateUrl: './head-component.component.html',
  styleUrls: ['./head-component.component.scss']
})
export class HeadComponentComponent implements OnInit {

  title = 'ToDo application'

  constructor() { }

  ngOnInit(): void {
  }

}
