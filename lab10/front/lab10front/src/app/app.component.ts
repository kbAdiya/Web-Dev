import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompanyComponent } from './company/company.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompanyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab10front';
}
