import { Component } from '@angular/core';
import { ThumbnailComponent } from '../../components/thumbnail/thumbnail.component';

@Component({
  selector: 'app-msr-collection',
  standalone: true,
  imports: [ThumbnailComponent],
  templateUrl: './msr-collection.component.html',
  styleUrl: './msr-collection.component.css',
})
export class MsrCollectionComponent {}
