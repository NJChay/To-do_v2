import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelbtnComponent } from './delbtn.component';

describe('DelbtnComponent', () => {
  let component: DelbtnComponent;
  let fixture: ComponentFixture<DelbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelbtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
