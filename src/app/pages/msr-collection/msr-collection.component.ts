import { Component, ViewChild } from '@angular/core';
import { ThumbnailComponent } from '../../components/thumbnail/thumbnail.component';
import { NgxSplideComponent, NgxSplideModule } from 'ngx-splide';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-msr-collection',
  standalone: true,
  imports: [NgxSplideModule, CommonModule],
  templateUrl: './msr-collection.component.html',
  styleUrl: './msr-collection.component.css',
})
export class MsrCollectionComponent {
  @ViewChild('mainSplide') gridThumbnailSplide: NgxSplideComponent | undefined;
  images = [
    'https://myportfolioarchive.s3.eu-north-1.amazonaws.com/90150007.JPG',
    'https://myportfolioarchive.s3.eu-north-1.amazonaws.com/redcar.JPG',
    'https://myportfolioarchive.s3.eu-north-1.amazonaws.com/90160005.JPG',
  ];
}
