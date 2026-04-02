import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { ActivatedRoute, Router } from '@angular/router'
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-album-detail',
  imports: [],
  template: `
    @if (album) {
      {{ album.title }}
    }
  `,
  styleUrl: './album-detail.css',
})
export class AlbumDetail implements OnInit {
  album!: Album;

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(album => this.album = album);
  }

  changeTitle() {
    this.albumService.updateAlbum(this.album).subscribe(updated => {
      alert("Album updated succesfully!");
    });
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}
