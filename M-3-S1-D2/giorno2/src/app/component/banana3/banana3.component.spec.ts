import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banana3Component } from './banana3.component';

describe('Banana3Component', () => {
  let component: Banana3Component;
  let fixture: ComponentFixture<Banana3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Banana3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Banana3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
