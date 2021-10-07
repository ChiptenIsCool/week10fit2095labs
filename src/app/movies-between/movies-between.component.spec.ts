import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesBetweenComponent } from './movies-between.component';

describe('MoviesBetweenComponent', () => {
  let component: MoviesBetweenComponent;
  let fixture: ComponentFixture<MoviesBetweenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesBetweenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesBetweenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
