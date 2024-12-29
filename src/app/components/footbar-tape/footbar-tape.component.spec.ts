import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootbarTapeComponent } from './footbar-tape.component';

describe('FootbarTapeComponent', () => {
  let component: FootbarTapeComponent;
  let fixture: ComponentFixture<FootbarTapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootbarTapeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootbarTapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
