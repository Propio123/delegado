import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Footer } from './layout/footer/footer';
import { Navbar, NavbarComponent } from './layout/navbar/navbar';
import { Hero } from "./sections/hero/hero";
import { CookieBannerComponent } from "./shared/components/cookie-banner/cookie-banner";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    Footer,
    Hero,
    CookieBannerComponent
],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App{
   constructor(
    private title: Title,
    private meta: Meta
  ) {
    this.title.setTitle('DPO Ecuador | Cumplimiento LOPDP');
    this.meta.addTag({
      name: 'description',
      content: 'Servicios profesionales de Delegado de Protección de Datos (DPO) en Ecuador. Cumplimiento LOPDP y asesoría especializada.'
    });
}
}

