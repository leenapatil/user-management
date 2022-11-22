import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private readonly fb: FormBuilder, private router: Router, private authService: AuthenticationService) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.authService.setAuthentication(false);
  }

  login() {
    if (!this.form.valid) {
      return;
    } else {
      const userName = this.form.controls['username'].value;
      const pass = this.form.controls['password'].value;
      if (userName === 'admin' && pass === 'admin') {
        this.authService.setAuthentication(true);
        this.router.navigateByUrl('dashboard');
      } else {
        this.form.controls['username'].setErrors({ 'incorrect': true });
        this.form.controls['password'].setErrors({ 'incorrect': true });
        this.authService.setAuthentication(false);
      }
    }
  }
}
