import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-card.html',
  styleUrls: ['./service-card.scss']
})
export class ServiceCardComponent {

  @Input({ required: true })
  service!: {
    title: string;
    description: string;
    icon: string;
  };

}

