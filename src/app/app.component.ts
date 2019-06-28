import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'pipe-demo';
  currentDate = new Date();
  products= [ {"id":1,
  "name":"Dell"}];
}
