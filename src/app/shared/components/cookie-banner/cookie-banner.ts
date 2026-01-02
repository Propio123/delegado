import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cookie-banner.html',
  styleUrls: ['./cookie-banner.scss']
})
export class CookieBannerComponent implements OnInit {

  accepted = false;
  isBrowser = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.accepted = localStorage.getItem('cookiesAccepted') === 'true';
    }
  }

  acceptCookies(): void {
    if (!this.isBrowser) return;

    localStorage.setItem('cookiesAccepted', 'true');
    this.accepted = true;

    // Si está en política, volver al home
    if (this.router.url === '/politica') {
      this.router.navigateByUrl('/');
    }
  }
}

