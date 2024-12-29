import { Component } from '@angular/core';
import { FootbarTapeComponent } from '../footbar-tape/footbar-tape.component';

@Component({
  selector: 'app-footbar',
  standalone: true,
  imports: [FootbarTapeComponent],
  templateUrl: './footbar.component.html',
  styleUrl: './footbar.component.css',
})
export class FootbarComponent {
  footbarWords = ['Msr Archive', 'مَجْموعة مصر'];
}
