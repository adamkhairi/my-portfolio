import {NgClass} from '@angular/common';
import {Component} from '@angular/core';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  mobileMenu = false
  menuItems: any;

  triggerNavItem(id: string): void {
    // Smoothly scroll to the element with the given ID.
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }


  triggerMobileNavItem(id: string) {
    this.mobileMenu = false;
    this.triggerNavItem(id)
  }
}
