import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SculpturesComponent } from './sculptures.component';

describe('SculpturesComponent', () => {
  let component: SculpturesComponent;
  let fixture: ComponentFixture<SculpturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SculpturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SculpturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
