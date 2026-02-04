import { Component,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { LanguageSelectComponent } from '../../components/language-select/language-select.component';
import { ServiceCardComponent } from '../../cards/service-card/service-card.component';
import {MatGridListModule, MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatButtonModule, MatButton} from '@angular/material/button';

import { Breakpoints} from '@angular/cdk/layout';
import { BreakpointObserver } from '@angular/cdk/layout';

import { ProjectCardComponent } from '../../cards/project-card/project-card.component';
@Component({
  selector: 'app-landingpage',
  imports: [NavbarComponent, MatGridListModule, MatGridList, MatGridTile, MatButtonModule, MatButton, ServiceCardComponent, ProjectCardComponent, LanguageSelectComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingpageComponent {
    lgScreen: boolean = true;
    spanish: boolean = true;
    constructor(private responsive : BreakpointObserver){

    }
    
    changeLang(par : string): void {
      this.spanish = (par == "Español");
    }
    ngOnInit(): void {
      this.responsive.observe(Breakpoints.WebLandscape).subscribe( result => {
          if(result.matches){
              this.lgScreen = true;
          }else{
            this.lgScreen = false;
          }
      });
   }
}
