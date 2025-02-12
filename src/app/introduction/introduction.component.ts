import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css', '../../styles.css'],
})
export class IntroductionComponent {}
