import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css', '../../styles.css'],
})
export class CreateProjectComponent {}
