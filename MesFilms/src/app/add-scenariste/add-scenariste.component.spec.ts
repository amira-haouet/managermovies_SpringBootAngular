import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScenaristeComponent } from './add-scenariste.component';

describe('AddScenaristeComponent', () => {
  let component: AddScenaristeComponent;
  let fixture: ComponentFixture<AddScenaristeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddScenaristeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScenaristeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
