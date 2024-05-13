import { Component, OnInit } from '@angular/core';
import {intern_update} from "./internship.model";

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {
  create_entry_clicked = false
  show_ip = false
  create_entry = this.create_entry_clicked && this.show_ip
  day_input:string;
  date_input:string;
  tasks_input:string;
  add_button_status = false
  show_entry  = false
  updates:intern_update[]= [new intern_update("1/1/2001", "Day 1", "Complete Internship Profile")]
  constructor() {
  setTimeout(() => {
      this.show_ip = true
    }
    , 2000
  )
}

  new_entry(){
    this.updates.push(new intern_update(this.date_input, this.day_input,this.tasks_input))
  }
  onUpdateDay(event: Event){
    this.day_input = (<HTMLInputElement>event.target).value;
    if(this.day_input.length == 0){
      this.add_button_status = false
    }
    else{
      this.add_button_status = true
    }
  }
  onUpdateTask(event: Event){
    this.tasks_input = (<HTMLInputElement>event.target).value;
    if(this.tasks_input.length == 0){
      this.add_button_status = false
    }
    else{
      this.add_button_status = true
    }
  }
  onUpdateDate(event: Event){
    this.date_input = (<HTMLInputElement>event.target).value;
    if(this.date_input.length == 0){
      this.add_button_status = false
    }
    else{
      this.add_button_status = true
    }
  }

  onShowEntry(){
    this.create_entry = false
    this.show_entry = !this.show_entry
  }
  onAddEntry(){
    this.show_entry = false
    this.create_entry = !this.create_entry
  }
  ngOnInit(): void {
  }

}
