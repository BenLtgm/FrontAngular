import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { allFilmResolver } from './all-film.resolver';

describe('allFilmResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => allFilmResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
