import { Component } from '@angular/core';

import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rForms';
  
  //ACHIEVING TWO WAY INTERACTIONu
  form = new FormGroup({
    name:new FormControl(),
    phone : new FormControl(),
    email : new FormControl()
  })

  //defining the event
  signup()
  {
    console.log(this.form.value)//passing the reference of FormGroup object
  }



}
