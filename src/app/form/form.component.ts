import { getFile } from 'ts-node/dist';
import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  public signupForm = new FormGroup({
    name: new FormControl("",Validators.required),
    password: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required)
    
  });
  
  constructor(public fb: FormBuilder) {}
  
  registerUser(event){
    // const userObject = getFile("./../models/user.ts");
   
    const user = { "name": this.signupForm.value.name, "pass": this.signupForm.value.password ,"email": this.signupForm.value.email};
    const myJSON = JSON.stringify(user);
    console.log(myJSON);

    console.log(this.signupForm.value);
  }
  
  
}
