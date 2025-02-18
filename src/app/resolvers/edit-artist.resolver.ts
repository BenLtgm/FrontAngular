import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { ArtistService } from '../api/services';
import { Artist } from '../api/models';

export const editArtistResolver: ResolveFn<Observable<Artist>> = (route, state) => {
  let id = route.paramMap.get("id");
  return inject(ArtistService).apiArtistIdGet$Json({id: id!})
}
