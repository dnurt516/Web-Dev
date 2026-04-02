import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { AlbumService } from '../services/album.service';
import { RouterLink } from "@angular/router";
import { Observable } from "rxjs";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albums',
  imports: [RouterLink, CommonModule],
  template: `
    <h1>Albums</h1>
    @if (albums | async) {
      <ul>
        @for (album of albums | async; track album.id) {
          <li>
            <a [routerLink]="['/albums', album.id]">
              {{ album.id }} - {{ album.title }}
            </a>
            <button (click)="deleteAlbum(album.id)">Delete</button>
          </li>
        }
      </ul>
    } @else {
      Loading...
    }
  `,
  styleUrl: './albums.css',
})
export class Albums implements OnInit {
  albums!: Observable<Album[]>;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albums = this.albumService.getAlbums();
  }

  deleteAlbum(id: number): void {  
    this.albumService.deleteAlbum(id).subscribe(() => {  
      this.albums = this.albumService.getAlbums();  
    });  
  }
}
