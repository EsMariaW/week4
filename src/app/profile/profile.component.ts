import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  username = "";
  birthdate = "";
  age = 0;

  constructor(private httpClient: HttpClient, private router:Router){
    // ! for not null
    if (sessionStorage.length == 0){
      this.router.navigateByUrl('login');
    } else {
      this.username = sessionStorage.getItem('username')!;
      this.birthdate = sessionStorage.getItem('birthdate')!;
      this.age = Number(sessionStorage.getItem('age'));
    }
  }

  submit(){
    let user = {
      "oldUsername": sessionStorage.getItem('username'),
      "username": this.username, 
      "birthdate": this.birthdate, 
      "age": this.age
    };
    this.httpClient.post<any>(
      "http://localhost:3000/afterLogin", user,httpOptions)
      .subscribe(
        (data: any)=> {  // data from res.send()
          (alert("postRes: " + JSON.stringify(data)));
          sessionStorage.setItem("username", data.username.toString());
          sessionStorage.setItem("birthdate", data.birthdate.toString());
          sessionStorage.setItem("age", data.age.toString());
          sessionStorage.setItem("email", data.email.toString());
          sessionStorage.setItem("valid", data.valid.toString());
        },
        (error: any)=> {
          (alert("Failed!"));
        }
      )
  }
}

