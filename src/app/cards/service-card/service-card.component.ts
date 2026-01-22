import { Component,  Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-service-card',
  imports: [MatCardModule],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})

export class ServiceCardComponent {
  @Input() iconSrc: string = 'images/placeholder_icon.jpg';
  @Input() title: string = 'placeholder title';
  @Input() subtitle: string = 'placeholder subtitle';
  bgcolor: string = '#242C3A';
  color: string = '#f4f4f4';
  transform = 'translateY(0)';
  shadow = '0 2px 6px rgba(0,0,0,0.15)';

  onHover(){
    this.bgcolor = '#00D0FF';
    this.color = '#242C3A';
    this.transform = 'translateY(-6px)';
  this.shadow = '0 8px 20px rgba(0,0,0,0.25)'
  }

  onLeave(){
    this.bgcolor = '#242C3A';
    this.color = '#f4f4f4';
    this.transform = 'translateY(0)';
    this.shadow = '0 2px 6px rgba(0,0,0,0.15)';
  }
  
}
