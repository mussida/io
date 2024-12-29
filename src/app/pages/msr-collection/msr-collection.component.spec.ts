import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrCollectionComponent } from './msr-collection.component';

describe('MsrCollectionComponent', () => {
  let component: MsrCollectionComponent;
  let fixture: ComponentFixture<MsrCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsrCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsrCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
