import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchheaderComponent } from './searchheader.component';

describe('SearchheaderComponent', () => {
  let component: SearchheaderComponent;
  let fixture: ComponentFixture<SearchheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
