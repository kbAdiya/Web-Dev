import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>The user's name is {{ name }}</p>
  `,
})
export class UserComponent {
  @Input() name = '';
}


@Component({
  selector: 'app-example5',
  imports: [UserComponent],
  template: `
     <app-user name="Simran" />
  `,
  styleUrl: './example5.component.css'
})
export class Example5Component {

}
