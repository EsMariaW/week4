import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  // Display the current user details of:
  //    username, birthdate and age 
  // on the account page
  username: string = '';
  birthdate: string = '';
  age: number = 0;

  ngOnInit(){
    this.username = sessionStorage.getItem('username')!;
    this.birthdate = sessionStorage.getItem('birthdate')!;
    this.age = Number(sessionStorage.getItem('age'));
  }

}
