import { TestBed } from '@angular/core/testing';

import { AguardaGuard } from './aguarda.guard';

describe('AguardaGuard', () => {
  let guard: AguardaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AguardaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
