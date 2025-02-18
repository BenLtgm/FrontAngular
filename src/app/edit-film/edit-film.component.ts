import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormFilmComponent } from '../form-film/form-film.component';
import { FilmService } from '../api/services';
import { Film } from '../api/models';


@Component({
  selector: 'app-edit-film',
  imports: [
    FormFilmComponent
  ],
  templateUrl: './edit-film.component.html',
  styleUrl: './edit-film.component.css'
})
export class EditFilmComponent implements AfterViewInit {
  @ViewChild("form") form!: FormFilmComponent
  title: string = "Edit Film"

  constructor(
    private service: FilmService,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit(): void {
    let film: Film = this.route.snapshot.data["film"]
    if (film) {
      this.form.setForm(film)
    }  
  }
  
  submit(film: Film | null) {
    if (film) {
      this.service.apiFilmIdPut({id: film.id!, body: film}).subscribe((data) => {})
    }
  }
} 