import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component(
{
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'reactive-demo';

  demoform = new FormGroup(
    {
      username: new FormControl<string> ('', Validators.required),
      email_address: new FormControl<string> ('', Validators.required),
      age: new FormControl<number | string> ('', Validators.required),
      phone_number: new FormControl<string> ('', Validators.required)
    });
 
  get username()
  {
    return this.demoform.get('username')?.value;
  }

  get email_address()
  {
    return this.demoform.get('email_address')?.value;
  }

  get age()
  {
    return this.demoform.get('age')?.value;
  }

  get phone_number()
  {
    return this.demoform.get('phone_number')?.value;
  }



  submit(e: Event)
  {
    e.preventDefault();
  }
}




