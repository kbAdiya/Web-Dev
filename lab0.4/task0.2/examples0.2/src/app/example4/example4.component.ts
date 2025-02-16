import { Component } from '@angular/core';

@Component({
  selector: 'app-example4',
  imports: [],
  template: `
    <div [contentEditable]="isEditable"></div>
    
     <section (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal:
      {{ message }}
    </section>
    <button (click)="greet()">
  `,
  styleUrl: './example4.component.css'
})
export class Example4Component {
  isEditable = true;
  message = '';
  greet() {
        console.log('Hello, there 👋');
    }
  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
}
