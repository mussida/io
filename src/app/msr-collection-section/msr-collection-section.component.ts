import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-msr-collection-section',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './msr-collection-section.component.html',
  styleUrl: './msr-collection-section.component.css',
})
export class MsrCollectionSectionComponent {}
