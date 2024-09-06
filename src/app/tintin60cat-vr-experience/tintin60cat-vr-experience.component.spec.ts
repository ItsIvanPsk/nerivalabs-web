import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tintin60catVrExperienceComponent } from './tintin60cat-vr-experience.component';

describe('Tintin60catVrExperienceComponent', () => {
  let component: Tintin60catVrExperienceComponent;
  let fixture: ComponentFixture<Tintin60catVrExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tintin60catVrExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tintin60catVrExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
