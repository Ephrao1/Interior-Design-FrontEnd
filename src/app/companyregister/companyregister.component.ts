import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-companyregister',
  templateUrl: './companyregister.component.html',
  styleUrls: ['./companyregister.component.css']
})
export class CompanyregisterComponent implements OnInit {

  constructor(private authService: UserAuthService) {}

  ngOnInit(): void {}

  showSuccessMessage = false;

  // create a new user
  onSubmit(form: NgForm) {
    const username = form.value.username;
    const email = form.value.email;
    const password = form.value.password;
    const c_password = form.value.c_password;

    // check if passwords match
    if (password !== c_password) {
      alert('Passwords do not match');
      return;
    }

    this.authService
      .createUser(username, email, password)
      .subscribe((response) => {
        console.log(response);
        this.showSuccessMessage = true;
      });

    form.reset();

  }
}
