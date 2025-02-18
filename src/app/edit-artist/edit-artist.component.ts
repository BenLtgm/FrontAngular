import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArtistComponent } from '../form-artist/form-artist.component';
import { ArtistService } from '../api/services';
import { Artist, Film } from '../api/models';

@Component({
  selector: 'app-edit-artist',
  imports: [
    FormArtistComponent
  ],
  templateUrl: './edit-artist.component.html',
  styleUrl: './edit-artist.component.css'
})
export class EditArtistComponent implements AfterViewInit {
  @ViewChild("form") form!: FormArtistComponent
  title: string = "Edit Artist"

  constructor(
    private service: ArtistService,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit(): void {    
    let artist: Artist = this.route.snapshot.data["artist"]
    if (artist) {
      this.form.setForm(artist)
    }
  }

  submit(artist: Artist | null) {
    if (artist) {
      this.service.apiArtistIdPut({id: artist.id!, body: artist}).subscribe((data) => {})
    }
  }

  editFilm(film: Film) {
    //this.router.navigate(["film/edit", film.id]);
  }
}