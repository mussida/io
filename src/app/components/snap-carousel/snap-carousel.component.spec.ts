import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapCarouselComponent } from './snap-carousel.component';

describe('SnapCarouselComponent', () => {
  let component: SnapCarouselComponent;
  let fixture: ComponentFixture<SnapCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnapCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnapCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
