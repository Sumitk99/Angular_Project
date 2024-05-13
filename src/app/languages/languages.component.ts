import {Component} from "@angular/core";

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
})

export class LanguagesComponent {
  show_ln = false

  constructor() {
    setTimeout(() => {
        this.show_ln = true
      }
      , 1000
    )
  }
}
