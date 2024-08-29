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
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username = "";
  password = "";

  constructor(private router:Router, private httpClient: HttpClient){}

  submit(){
    let user = {username: this.username, password: this.password};
    this.httpClient.post(
      "http://localhost:3000/api/login", user,httpOptions)
      .subscribe(
        (data: any)=> {  // data from res.send()
          if(data.valid){
            // when user logs in, store their detials in sessionStorage
            //    except: do not store password
            sessionStorage.setItem("username", data.username.toString());
            sessionStorage.setItem("birthdate", data.birthdate.toString());
            sessionStorage.setItem("age", data.age.toString());
            sessionStorage.setItem("email", data.email.toString());
            sessionStorage.setItem("valid", data.valid.toString());
          } else {
            alert("Incorrect details");
          }
        }
      )
  }
}
