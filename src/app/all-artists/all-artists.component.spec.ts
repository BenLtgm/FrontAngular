import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllArtistsComponent } from './all-artists.component';

describe('AllArtistsComponent', () => {
  let component: AllArtistsComponent;
  let fixture: ComponentFixture<AllArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllArtistsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
