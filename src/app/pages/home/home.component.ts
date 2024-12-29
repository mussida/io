import { Component } from '@angular/core';
import { NgxSplideModule } from 'ngx-splide';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxSplideModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
