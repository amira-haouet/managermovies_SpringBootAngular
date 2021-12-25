import { TestBed } from '@angular/core/testing';

import { ScenaristeService } from './scenariste.service';

describe('ScenaristeService', () => {
  let service: ScenaristeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScenaristeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
