import { Component } from '@angular/core';
import { DarkModeServiceService } from '../dark-mode-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private darkModeService: DarkModeServiceService) {}

  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }
}
