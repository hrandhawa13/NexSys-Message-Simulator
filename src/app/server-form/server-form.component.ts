import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})
export class ServerFormComponent implements OnInit{
  title = 'Server Info Form';
  reactiveForm:FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      address: new FormControl('http://'),
      username: new FormControl('admin'),
      password: new FormControl('admin')
    });
  }
  onSubmit(){

  }
}
