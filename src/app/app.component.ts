import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'virtual-scroll';
  listItems = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
}
