import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { NgIf, NgFor } from '@angular/common';
import { Photo } from '../photo';
import { Router } from '@angular/router';
@Component({
  selector: 'app-album-photos',
  imports: [NgIf, NgFor],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  album: any;
  photos: any[] = [];
  albumId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.albumId) {
      this.loadAlbum(this.albumId);
      this.loadPhotos(this.albumId);
    }
  }

  loadAlbum(id: number): void {
    this.albumsService.getAlbumById(id).subscribe((album) => {
      this.album = album;
    });
  }

  loadPhotos(id: number): void {
    this.albumsService.getAlbumPhotos(id).subscribe((photos) => {
      this.photos = photos;
    });
  }

  goBack(): void {
    if (this.albumId) {
      this.router.navigate(['/albums', this.albumId]);
    }
  }
}
