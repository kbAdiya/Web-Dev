import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule, NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
