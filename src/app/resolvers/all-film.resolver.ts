import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { FilmService } from '../api/services';
import { Observable } from 'rxjs';
import { Film } from '../api/models';

export const allFilmResolver: ResolveFn<Observable<Array<Film>>> = (route, state) => {
  return inject(FilmService).apiFilmGet$Json()
};
