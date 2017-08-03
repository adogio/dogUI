import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dog-block',
  template: `
    <p>
      block Works!
    </p>
  `,
  styles: []
})
export class BlockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
