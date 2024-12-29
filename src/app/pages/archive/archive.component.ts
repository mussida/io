import { Component } from '@angular/core';
import { ThumbnailComponent } from '../../components/thumbnail/thumbnail.component';
import { SnapCarouselComponent } from '../../components/snap-carousel/snap-carousel.component';
import { ArchiveCardComponent } from '../../archive-card/archive-card.component';
import { MsrCollectionSectionComponent } from '../../msr-collection-section/msr-collection-section.component';

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [
    ThumbnailComponent,
    SnapCarouselComponent,
    ArchiveCardComponent,
    MsrCollectionSectionComponent,
  ],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.css',
})
export class ArchiveComponent {}
