import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor() {
    // You can uncomment this to see that it doesn't produce any tick...
    // but when app works, it produce a tick!
    // setInterval(() => {
    //   console.log('ey');
    // }, 1000);
  }
}
