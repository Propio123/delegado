import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  standalone: true,
  templateUrl: './politica.html'
})
export class PoliticaComponent implements OnInit {
  lastUpdated = 'enero 2026';

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.title.setTitle('Política de Privacidad | DPO Ecuador');

    this.meta.updateTag({
      name: 'description',
      content: 'Conoce la política de privacidad y tratamiento de datos personales conforme a la LOPDP en Ecuador.'
    });
  }
}

