import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'virtual-scroll';
  items = Array.from({length: 5}).map((_, i) => `Item #${i}`);
}
