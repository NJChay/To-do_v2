import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentheaderComponent } from './commentheader.component';

describe('CommentheaderComponent', () => {
  let component: CommentheaderComponent;
  let fixture: ComponentFixture<CommentheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
