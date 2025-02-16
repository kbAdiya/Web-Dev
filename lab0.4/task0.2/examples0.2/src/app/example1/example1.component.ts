import { Component } from '@angular/core';

@Component({
  selector: 'app-example1',
  imports: [],
  template: `
      Hello {{ city }}, {{ 1 + 1 }}
  `,
  styleUrl: './example1.component.css'
})
export class Example1Component {
  city = 'San Francisco';
}
