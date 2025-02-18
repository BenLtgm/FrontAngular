import { Component, EventEmitter, Input, Output } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { Film } from '../api/models';

@Component({
  selector: 'app-form-film',
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
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    MatButtonModule,
    MatSlideToggleModule
  ],
  providers: [
    provideNativeDateAdapter()
  ],
  templateUrl: './form-film.component.html',
  styleUrl: './form-film.component.css'
})
export class FormFilmComponent {
  filmform = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    isStreamable: new FormControl(false, [Validators.required]),
    releaseDate: new FormControl(new Date(), [Validators.required]),
    time: new FormControl(1, [Validators.required])
  });
  @Output() formSubmit = new EventEmitter<any>();
  @Input() title: String = null!
  
  public setTitle(title: string) {
    this.title = title
  }

  submit() {
    this.formSubmit.emit(this.filmform.value)
  }

  setForm(film: Film) {
    this.filmform.setValue({
      id: film.id ?? '',
      name: film.name ?? '',
      isStreamable: film.isStreamable ?? false,
      releaseDate: new Date(film.releaseDate ?? '') ?? new Date(),
      time: film.time ?? 1
    })
  }

  getForm() {
    if (this.filmform.valid) {
      let value = this.filmform.value
      let toFilm: Film = {
        id : value.id ?? '',
        name : value.name ?? '',
        isStreamable : value.isStreamable ?? false,
        releaseDate : value.releaseDate?.toString(),
        time: value.time ?? 1 
      }
      return toFilm
    } else {
      console.error("Id is null")
    }
    return undefined
  }
}
 