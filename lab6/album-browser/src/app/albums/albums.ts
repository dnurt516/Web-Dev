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
    <ul *ngIf="albums$ | async as albums; else loading">
  <li *ngFor="let album of albums">
    {{ album.id }} - {{ album.title }}
  </li>
</ul>

<ng-template #loading>
  Loading...
</ng-template>   
  `,
  styleUrl: './albums.css',
})
export class Albums implements OnInit {
  albums: Album[] = [];
  loading: boolean = false;

  constructor(private albumService: AlbumService) {}

  albums$!: Observable<Album[]>;

  ngOnInit(): void {
    this.albums$ = this.albumService.getAlbums();
  }

  deleteAlbum(id : number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}
