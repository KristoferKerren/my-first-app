import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  newServerName: string = '';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  // onUpdateServerName(event: Event) {
  //   this.newServerName = (<HTMLInputElement>event.target).value; //To inform typescript that it is an HTML input elent
  // }

}
