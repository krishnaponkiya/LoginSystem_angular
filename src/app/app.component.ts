import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServicService } from './login-servic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'LoginSystem';
  loginform: FormGroup;
  isSuccessFull = false;
  isError = false;
  constructor(public formBuilder: FormBuilder, private loginService: LoginServicService) {
    this.loginform = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit() {}

  onLoginForm() {
    this.loginService.login(this.loginform.value).subscribe(loginResponse => {
      this.isSuccessFull = true;
      this.isError = false;
    }, error => {
        this.isError = true
        this.isSuccessFull = false
    })
  }
  
  get FormControl() {
    return this.loginform.controls; 
  }
}
