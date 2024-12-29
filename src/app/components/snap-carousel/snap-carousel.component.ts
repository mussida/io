import { Component } from '@angular/core';

@Component({
  selector: 'app-snap-carousel',
  standalone: true,
  imports: [],
  templateUrl: './snap-carousel.component.html',
  styleUrl: './snap-carousel.component.css',
})
export class SnapCarouselComponent {
  images = [
    'assets/landing1.JPG',
    'assets/landing2.JPG',
    'assets/trattore.JPG',
  ];
}
