import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-language-select',
  imports: [MatMenuModule],
  templateUrl: './language-select.component.html',
  styleUrl: './language-select.component.css'
})
export class LanguageSelectComponent {
  selected: string = "Español"
  @Input() changeBool: () => void = () => { }
  @Output() languageChange = new EventEmitter<string>();
  setSelected(str: string) {
    if (this.selected == "Español" && str == "English") {
      this.selected = "English"
    } else if (this.selected == "English" && str == "Español") {
      this.selected = "Español"
    }

    this.languageChange.emit(this.selected);
  }
}
