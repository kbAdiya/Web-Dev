import { Component } from '@angular/core';

@Component({
  selector: 'app-example2',
  imports: [],
  template: `
     Username: {{ username }}
  `,
  styleUrl: './example2.component.css'
})
export class Example2Component {
  username = 'youngTech';
}
