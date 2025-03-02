import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlbumsService } from './albums.service';
import { RouterModule ,Router} from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'albums';
}
