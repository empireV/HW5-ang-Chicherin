import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HW6-ang-Chicherin';
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      login: new FormControl(''),
      pass: new FormControl(''),
      confpass: new FormControl('')
    }, this.passValidator.bind(this));
  }

  save(myForm: FormGroup): void {
    console.log(myForm);
  }

  loginValidator(myForm: FormGroup): number {
    const login = myForm.controls.login.value;
    let status;
    if (login.length < 5) {
    status = -1;
    } else if (login.length > 10) {
      status = 1;
    } else {
      status = 0;
    }
    return status;
  }

  passValidator(myForm: FormGroup): object | null {
    const firstPass = myForm.controls.pass.value.toLowerCase();
    const secondPass = myForm.controls.confpass.value.toLowerCase();
    return firstPass === secondPass ? null : {passError: true};
  }
}
