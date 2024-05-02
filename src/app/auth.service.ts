import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  signup(users: any[], username: string, password: string): boolean {
    // Check if the username is already taken
    const isExistingUser = users.some((user) => user.username === username);
    if (isExistingUser) {
      return false; // Username already exists
    } else {
      // Add the new user to the array
      users.push({ username, password });
      localStorage.setItem('users', JSON.stringify(users));
      return true; // Signup successful
    }
  }

  login(users: any[], username: string, password: string): boolean {
    // Simulate authentication by checking against signed-up users
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify({ username }));
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  getUsers(): any[] {
    const usersJSON = localStorage.getItem('users');
    return usersJSON ? JSON.parse(usersJSON) : [];
  }
}
