import { Component, inject, OnInit } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { DeleteFilmComponent } from '../delete-film/delete-film.component';

import { Film } from '../film';
import { PermissionService } from '../permission.service';
import { FilmService } from '../film.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-films',
  imports: [
    MatListModule,
    MatCardModule, 
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
  ],
  templateUrl: './all-films.component.html',
  styleUrl: './all-films.component.css'
})
export class AllFilmsComponent implements OnInit {
  films: Array<Film> = []
  readonly dialog = inject(MatDialog);

  constructor(
    private filmsService: FilmService,
    public permission: PermissionService
  ) {}

  ngOnInit(): void {
    this.getFilms()
  }

  delete() {
    const dialogRef = this.dialog.open(DeleteFilmComponent, {
      //data: {name: this.name(), animal: this.animal()},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  edit() {
    
  }

  private getFilms() {
    this.filmsService.getFilms().subscribe((data) => {
      console.log(data)
      this.films = data
    }, (error) => {
      console.error(error)
    })
  }
}