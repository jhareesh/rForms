import { Component } from '@angular/core';

//importing the FormGroup and FormControl 
import { FormGroup,FormControl } from '@angular/forms';
//importing the Validators
import { Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rForms';
  
  //ACHIEVING TWO WAY INTERACTIONu
  form = new FormGroup({
    //creating applying validation using validators
    name:new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(8)]),
    phone : new FormControl("",[Validators.required,Validators.pattern("[7-9]{1}[0-9]{9}")]),
    email : new FormControl("",[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
  })

  //defining the event
  signup()
  {
    console.log(this.form.value)//passing the reference of FormGroup object
  }



}
