import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public user = JSON.parse(JSON.stringify({
    nickname: '',
    password: ''
  }));

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.token$.pipe(
      map((token) => {
        if (token) {
          this.router.navigate(['/dashboard']);
          return true;
        } else {
          return false;
        }
      })
    );
  }

  login() {
    this.userService.login(this.user);
  }
}
