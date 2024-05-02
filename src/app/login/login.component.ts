import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login(username: string, password: string): void {
    const users = this.authService.getUsers();
    // Simulate authentication, pass the array of signed-up users
    const isAuthenticated = this.authService.login(users, username, password);
    if (isAuthenticated) {
      this.router.navigate(['/profile']);
    } else {
      // Handle authentication failure
      console.log('Login failed');
    }
  }
}
