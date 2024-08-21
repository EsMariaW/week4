import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  constructor(private router:Router){}

  all_users=[
    {email: "Mallory_Beahan63@gmail.com",
      password: "EEjjK2xWmIanNBe"
    },
    {email: "Dimitri_Ziemann90@gmail.com",
      password: "Xyd7BpnhybS7ZoB"
    },
    {email: "Dimitri_ZiemannJanesque90@gmail.com",
      password: "HdFQTFDv65I6lXJ"
    }
  ];

  email = "";
  password = "";

  itemClicked(){
    if (this.all_users.find(user =>
      user.email == this.email && user.password == this.password)){
        this.router.navigate(['/account']);
    } else {
      alert("Not Found");
    }
  }
}
