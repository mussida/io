import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrCollectionSectionComponent } from './msr-collection-section.component';

describe('MsrCollectionSectionComponent', () => {
  let component: MsrCollectionSectionComponent;
  let fixture: ComponentFixture<MsrCollectionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsrCollectionSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsrCollectionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
