import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path: 'account', component: AccountComponent},
    // link new component in main menu via new route
    {path: 'profile', component: ProfileComponent}  
];
