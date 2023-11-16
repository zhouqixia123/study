import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrWebComponent } from './rr-web.component';

describe('RrWebComponent', () => {
  let component: RrWebComponent;
  let fixture: ComponentFixture<RrWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RrWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RrWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
