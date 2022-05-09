import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm !: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private singupService: AuthService
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: '',
      email: '',
      password: ''
    });
  }

  /**
   * lưu thông tin đăng ký
   */
  signUp() {
    this.singupService.signup(this.signupForm.value).subscribe(rs => {
      this.signupForm.reset();
      this.router.navigate(['login']);
    });
  }
}
