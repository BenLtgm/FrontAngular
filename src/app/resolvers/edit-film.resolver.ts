import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { FilmService } from '../api/services';
import { Film } from '../api/models';

export const editFilmResolver: ResolveFn<Observable<Film>> = (route, state) => {
  let id = route.paramMap.get("id");
  return inject(FilmService).apiFilmIdGet$Json({id: id!})
};
