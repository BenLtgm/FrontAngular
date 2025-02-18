import { Component } from '@angular/core';
import { FormFilmComponent } from '../form-film/form-film.component';
import { FilmService } from '../api/services';
import { Film } from '../api/models';

@Component({
  selector: 'app-create-film',
  imports: [
    FormFilmComponent
  ],
  templateUrl: './create-film.component.html',
  styleUrl: './create-film.component.css'
})
export class CreateFilmComponent {
  title: string = "Create Film"

  constructor(private filmService: FilmService) {}

  submit(film: Film) {
    if (film) {
      this.filmService.apiFilmPost({body: film}).subscribe((data) => {})
    }
  }
}
