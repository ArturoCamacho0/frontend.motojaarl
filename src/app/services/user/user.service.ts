import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string;
  public headers: HttpHeaders;

  private user: BehaviorSubject<JSON | null> = new BehaviorSubject<JSON | null>(
    null
  );
  user$ = this.user.asObservable();

  private token: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);
  token$ = this.token.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.url = environment.url;

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
  }

  // Login user
  public login(user: JSON) {
    return this.http.post(this.url + 'login', user).subscribe(
      response => {
        let res = JSON.parse(JSON.stringify(response));
        if(res.token && res.user){
          this.token.next(res.token);
          this.user.next(res.user);

          this.router.navigate(['dashboard']);
        }
      },
      error => {
        console.error(error);
      }
    );
  }
}
