import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  // templateUrl: './list-component.component.html',
  // styleUrls: ['./list-component.component.css']
  template:`<ng-content>
  
            </ng-content>`
})
export class ListComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
