import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreDelDelTutuComponent } from './padre-del-del-tutu.component';

describe('PadreDelDelTutuComponent', () => {
  let component: PadreDelDelTutuComponent;
  let fixture: ComponentFixture<PadreDelDelTutuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreDelDelTutuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreDelDelTutuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
