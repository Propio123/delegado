import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Politica } from './politica';

describe('Politica', () => {
  let component: Politica;
  let fixture: ComponentFixture<Politica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Politica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Politica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
