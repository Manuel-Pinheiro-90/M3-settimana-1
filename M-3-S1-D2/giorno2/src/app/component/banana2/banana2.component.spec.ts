import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banana2Component } from './banana2.component';

describe('Banana2Component', () => {
  let component: Banana2Component;
  let fixture: ComponentFixture<Banana2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Banana2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Banana2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
