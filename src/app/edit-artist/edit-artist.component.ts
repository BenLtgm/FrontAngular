import { Component, OnInit } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
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


import { Film } from '../film';
import { ActivatedRoute } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-edit-artist',
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
    MatListModule
  ],
  providers: [
    provideNativeDateAdapter()
  ],
  templateUrl: './edit-artist.component.html',
  styleUrl: './edit-artist.component.css'
})
export class EditArtistComponent implements OnInit {
  films: Array<Film> = []

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id: string | null  = this.route.snapshot.paramMap.get("id")
    console.log(id)
  }

  onSubmit() {
    
  }
}