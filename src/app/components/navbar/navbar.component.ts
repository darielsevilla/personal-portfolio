import { Component } from '@angular/core';
import {MatToolbarModule, MatToolbar} from '@angular/material/toolbar';
@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatToolbar],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  moveTo(id : string){
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });

  }
}
