import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMovieTitleComponent } from './delete-movie-title.component';

describe('DeleteMovieTitleComponent', () => {
  let component: DeleteMovieTitleComponent;
  let fixture: ComponentFixture<DeleteMovieTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMovieTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMovieTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
