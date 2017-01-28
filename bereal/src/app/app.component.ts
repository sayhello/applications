import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="app">
      Hello! {{title}}
      <button>Hello</button>
    </div>
  `
})
export class AppComponent {
  title = 'app works!';
}
