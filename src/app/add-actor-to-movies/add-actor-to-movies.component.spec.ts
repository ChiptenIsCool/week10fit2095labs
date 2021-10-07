import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActorToMoviesComponent } from './add-actor-to-movies.component';

describe('AddActorToMoviesComponent', () => {
  let component: AddActorToMoviesComponent;
  let fixture: ComponentFixture<AddActorToMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddActorToMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActorToMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
