import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }
  login() {
    this.router.navigate(["charging"])
    // this.http.get<any>("http://localhost:3000/signupUser").subscribe(rs => {
    //   const user = rs.find((e: any) => {
    //     return e.email === this.loginForm.value.email && e.password === this.loginForm.value.password
    //   });
    //   if(user)
    //   {
    //     this.loginForm.reset();
    //   }
    // });
  }
}
