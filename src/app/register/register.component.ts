import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  constructor(private authService: AuthService) {}

  signup(username: string, password: string): void {
    const users = this.authService.getUsers();
    const isSignupSuccessful = this.authService.signup(
      users,
      username,
      password
    );
    if (isSignupSuccessful) {
      // Redirect to login page after successful signup
      // You can implement this logic based on your application flow
      console.log('Signup successful');
    } else {
      // Handle signup failure (e.g., username already exists)
      console.log('Signup failed');
    }
  }
}
