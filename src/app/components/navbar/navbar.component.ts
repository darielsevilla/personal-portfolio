import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatToolbar, CommonModule, MatMenuModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() spanish: boolean = true;
  @Input() lgScreen: boolean = true;
  menuItems = [
    { es: 'Inicio', en: 'Home' },
    { es: 'Servicios', en: 'Services' },
    { es: 'Proyectos', en: 'Projects' },
    { es: 'Certificados', en: 'Certificates' },
    { es: 'Contacto', en: 'Contact Information' }
  ];

  moveTo(id: string) {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });

  }
}
