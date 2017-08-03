import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dog-title',
  template: `
    <div class="titlebg">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .titlebg{
        background-color: #c6c6c6;
        padding: 0px;
        margin: 0px;
        height: 45px;
        line-height: 30px;
        vertical-align: middle;
        font-size: 21px;
        font-family: 'ubuntu'
      }
    `
  ]
})
export class TitleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
