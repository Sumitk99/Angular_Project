import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  show_ed = false
  constructor() {
    setTimeout(() =>{
      this.show_ed = true
    }
      ,500
    )
  }

  ngOnInit(): void {
  }

}
