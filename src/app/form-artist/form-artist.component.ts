import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

import { CommonModule } from '@angular/common';
import { PermissionService } from '../permission.service';
import { Router } from '@angular/router';
import { Artist, Film } from '../api/models';
import { FilmService } from '../api/services';

@Component({
  selector: 'app-form-artist',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    CommonModule
  ],
  providers: [
    provideNativeDateAdapter()
  ],
  templateUrl: './form-artist.component.html',
  styleUrl: './form-artist.component.css'
})
export class FormArtistComponent {
  form = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    birthdate: new FormControl(new Date(), [Validators.required]),
    listeners: new FormControl(1, [Validators.required]),
    films: new FormControl<Film[]>([], [Validators.required])
  });
  @Output() formSubmit = new EventEmitter<any>();
  @Input() title: String = null!

  constructor(
    public permission: PermissionService,
    private filmService: FilmService,
    private router: Router
  ) {}
  
  submit() {
    this.formSubmit.emit(this.form.value)
  }

  setTitle(title: string) {
    this.title = title
  }

  deleteFilm(film: Film) {
    this.filmService.apiFilmIdDelete({id: film.id!}).subscribe((data) => {})
  }

  editFilm(film: Film) {
    this.router.navigate(["film/edit", film.id]);
  }

  getForm() {
    if (this.form.valid) {
      let value = this.form.value
      let artist: Artist = {
        id : value.id ?? '',
        name: value.name ?? '',
        birthdate: value.birthdate?.toString(),
        listeners : value.listeners ?? 1,
        films : value.films ?? []
      }
      return artist
    } else {
      console.error("form not valid")
    }
    return undefined
  }

  setForm(artist: Artist) {
    this.form.setValue({
      id: artist.id!,
      name: artist.name!,
      birthdate: new Date(artist.birthdate!),
      listeners: artist.listeners!,
      films: artist.films!
    })
  }
  
}
