import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpwordComponent } from './newpword.component';

describe('NewpwordComponent', () => {
  let component: NewpwordComponent;
  let fixture: ComponentFixture<NewpwordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewpwordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewpwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
