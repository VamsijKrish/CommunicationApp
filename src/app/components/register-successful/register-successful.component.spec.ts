import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSuccessfulComponent } from './register-successful.component';

describe('RegisterSuccessfulComponent', () => {
  let component: RegisterSuccessfulComponent;
  let fixture: ComponentFixture<RegisterSuccessfulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterSuccessfulComponent]
    });
    fixture = TestBed.createComponent(RegisterSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
