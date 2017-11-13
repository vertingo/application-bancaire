/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MouvService } from './mouv.service';

describe('MouvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MouvService]
    });
  });

  it('should ...', inject([MouvService], (service: MouvService) => {
    expect(service).toBeTruthy();
  }));
});
