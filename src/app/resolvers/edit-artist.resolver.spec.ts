import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { editArtistResolver } from './edit-artist.resolver';

describe('editArtistResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => editArtistResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
