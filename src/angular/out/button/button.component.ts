import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dog-button',
  template: `
    <p>
      <button><ng-content></ng-content></button>
    </p>
  `,
  styles: [
    `
      button{
        border: 0px;
        border-radius: 10px;
        width: 30px;
        height: 30px;
        background-color: transparent;
      }
    `
  ]
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
