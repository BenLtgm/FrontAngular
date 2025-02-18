import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { ArtistService } from '../api/services';
import { Observable } from 'rxjs';
import { Artist } from '../api/models';

export const allArtistResolver: ResolveFn<Observable<Array<Artist>>> = (route, state) => {
  return inject(ArtistService).apiArtistGet$Json()
};
