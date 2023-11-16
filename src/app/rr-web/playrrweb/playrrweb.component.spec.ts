import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayrrwebComponent } from './playrrweb.component';

describe('PlayrrwebComponent', () => {
  let component: PlayrrwebComponent;
  let fixture: ComponentFixture<PlayrrwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayrrwebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayrrwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
