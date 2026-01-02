import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-banner.html',
  styleUrls: ['./cookie-banner.scss']
})
export class CookieBannerComponent {

  accepted = false;

  ngOnInit(): void {
    this.accepted = localStorage.getItem('cookiesAccepted') === 'true';
  }

  acceptCookies(): void {
    localStorage.setItem('cookiesAccepted', 'true');
    this.accepted = true;
  }
}
