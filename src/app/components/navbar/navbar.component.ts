import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private authService: AuthService){}

  getCurrentUser(){
    return this.authService.getCurrentUser();
  }

  logout(){
    this.authService.logout()
      .then(() => console.log("Logout exitoso"))
      .catch(err => console.log(err));
  }
}
