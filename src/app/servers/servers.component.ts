import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //either template or templateUrl needs to be in @Component
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
