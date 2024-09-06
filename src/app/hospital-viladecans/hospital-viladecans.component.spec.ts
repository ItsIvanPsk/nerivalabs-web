import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalViladecansComponent } from './hospital-viladecans.component';

describe('HospitalViladecansComponent', () => {
  let component: HospitalViladecansComponent;
  let fixture: ComponentFixture<HospitalViladecansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalViladecansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalViladecansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
