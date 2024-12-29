import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-footbar-tape',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footbar-tape.component.html',
  styleUrl: './footbar-tape.component.css',
})
export class FootbarTapeComponent {
  words = input<string[]>();
}
