import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginErrorPopupComponent } from './error.component';


describe('ErrorComponent', () => {
  let component: LoginErrorPopupComponent;
  let fixture: ComponentFixture<LoginErrorPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginErrorPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginErrorPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
