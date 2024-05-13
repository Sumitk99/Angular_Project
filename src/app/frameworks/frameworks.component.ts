import {Component} from "@angular/core";

@Component({
  selector: "app-frameworks",
  templateUrl: "./frameworks.component.html",
})

export class FrameworksComponent {
  show_fw = false
  constructor() {
    setTimeout(() => {
        this.show_fw = true
      }
      , 1500
    )
  }
}
