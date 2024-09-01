import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeServiceService {
  private darkModeKey = 'dark-mode';

  constructor() {
    this.loadDarkModePreference();
  }

  private loadDarkModePreference(): void {
    const darkMode = localStorage.getItem(this.darkModeKey) === 'enabled';
    if (darkMode) {
      document.body.classList.add('dark-mode');
    }
  }

  public toggleDarkMode(): void {
    const isDarkMode = document.body.classList.contains('dark-mode');
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem(this.darkModeKey, 'disabled');
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem(this.darkModeKey, 'enabled');
    }
  }

 
}
