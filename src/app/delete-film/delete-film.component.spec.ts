import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFilmComponent } from './delete-film.component';

describe('DeleteFilmComponent', () => {
  let component: DeleteFilmComponent;
  let fixture: ComponentFixture<DeleteFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteFilmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
