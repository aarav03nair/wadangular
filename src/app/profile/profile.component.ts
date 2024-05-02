import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  currentUser: any;

  constructor(private authService: AuthService) {
    // Retrieve current user from local storage
    const currentUserJSON = localStorage.getItem('currentUser');
    this.currentUser = currentUserJSON ? JSON.parse(currentUserJSON) : null;
  }
}
