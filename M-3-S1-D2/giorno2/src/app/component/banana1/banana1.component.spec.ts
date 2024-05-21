import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banana1Component } from './banana1.component';

describe('Banana1Component', () => {
  let component: Banana1Component;
  let fixture: ComponentFixture<Banana1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Banana1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Banana1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
