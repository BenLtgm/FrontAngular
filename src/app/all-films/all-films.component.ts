import { Component, inject, OnInit } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { DeleteFilmComponent } from '../delete-film/delete-film.component';

import { PermissionService } from '../permission.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Film } from '../api/models';
import { FilmService } from '../api/services';

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
    public permission: PermissionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.films = this.route.snapshot.data["films"]
  }

  delete(id: string) {
    const dialogRef = this.dialog.open(DeleteFilmComponent, { data: id });
    dialogRef.afterClosed().subscribe(result => {
      this.filmsService.apiFilmIdGet$Json({id: id!}).subscribe((data) => {})
    });
  }

  edit(id: string) {
    this.router.navigate(["film/edit", id]);
  }
}