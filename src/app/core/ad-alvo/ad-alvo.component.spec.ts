import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAlvoComponent } from './ad-alvo.component';

describe('AdAlvoComponent', () => {
  let component: AdAlvoComponent;
  let fixture: ComponentFixture<AdAlvoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdAlvoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdAlvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
