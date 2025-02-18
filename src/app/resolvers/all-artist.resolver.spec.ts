import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { allArtistResolver } from './all-artist.resolver';

describe('allArtistResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => allArtistResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
