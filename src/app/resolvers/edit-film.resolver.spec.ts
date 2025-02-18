import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { editFilmResolver } from './edit-film.resolver';

describe('editFilmResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => editFilmResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
