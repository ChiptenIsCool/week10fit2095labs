import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBetweenComponent } from './delete-between.component';

describe('DeleteBetweenComponent', () => {
  let component: DeleteBetweenComponent;
  let fixture: ComponentFixture<DeleteBetweenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBetweenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBetweenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
