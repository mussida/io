import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thumbnail.component.html',
  styleUrl: './thumbnail.component.css',
})
export class ThumbnailComponent {
  images = [
    'assets/landing1.JPG',
    'assets/landing2.JPG',
    'assets/trattore.JPG',
  ];

  currentImage: number = 0;

  previousImage() {
    this.currentImage =
      this.currentImage === 0 ? this.images.length - 1 : this.currentImage - 1;
    console.log(this.currentImage);
  }

  nextImage() {
    this.currentImage =
      this.currentImage === this.images.length - 1 ? 0 : this.currentImage + 1;
    console.log(this.currentImage);
  }
}
