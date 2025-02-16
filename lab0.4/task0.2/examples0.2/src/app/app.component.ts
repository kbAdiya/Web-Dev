import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { Example4Component } from './example4/example4.component';
import { Example5Component } from './example5/example5.component';
import { Example6Component } from './example6/example6.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Example1Component, Example2Component, Example3Component, Example4Component,
   Example5Component, Example6Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'examples0.2';
}
