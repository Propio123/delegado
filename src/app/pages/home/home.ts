import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChildren('card') cards!: QueryList<ElementRef>;

  services = [
    {
      title: 'Asesoría LOPDP',
      description: 'Implementación y cumplimiento normativo.',
      icon: 'bi bi-shield-lock'
    },
    {
      title: 'Políticas de Datos',
      description: 'Redacción de políticas internas.',
      icon: 'bi bi-file-earmark-text'
    },
    {
      title: 'Capacitación',
      description: 'Formación al personal.',
      icon: 'bi bi-mortarboard'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  copyToClipboard(event: Event, text: string): void {
  event.preventDefault();
  event.stopPropagation();

  if (!navigator.clipboard) {
    this.fallbackCopy(text);
    return;
  }

  navigator.clipboard.writeText(text).then(() => {
    this.showToast();
  }).catch(() => {
    this.fallbackCopy(text);
  });
}
private fallbackCopy(text: string): void {
  const textarea = document.createElement('textarea');
  textarea.value = text;

  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';

  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  try {
    document.execCommand('copy');
    this.showToast();
  } catch (err) {
    console.error('Error al copiar', err);
  }

  document.body.removeChild(textarea);
}

private showToast(): void {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return; // ⛔ NO ejecutar en SSR
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 });

    this.cards.forEach(card => observer.observe(card.nativeElement));
  }
}

