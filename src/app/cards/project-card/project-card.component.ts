import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-project-card',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  bgcolor: string = '#242C3A';
  color:string = '#f4f4f4';

  transform = 'translateY(0)';
  shadow = '0 2px 6px rgba(0,0,0,0.15)';

  @Input() title: string = 'Projecto';
  @Input() subtitle: string = 'Subtitulo del projecto';
  @Input() description: string = 'Descripción del projecto';
  @Input() image: string = "images/placeholder-background.png";
  @Input() url: string = '#';

  openUrl() {
    window.open(this.url, '_blank');
  }

}
