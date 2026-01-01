import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class TestimonialComponent  {
  @Input() testimonials = [
    {
      name: 'Maria S.',
      text: "Luisa's products changed my life! The pain cream works in minutes and the aromatherapy oils help me sleep better.",
      rating: 5,
      product: 'Pain Cream & Oils',
    },
    {
      name: 'James R.',
      text: "I've been using Immunocal for 3 months. My energy levels are amazing and I haven't been sick once!",
      rating: 5,
      product: 'Immunocal',
    },
    {
      name: 'Sofia M.',
      text: 'The crystal jewelry is stunning and I love the personal service. Luisa truly cares about her customers!',
      rating: 5,
      product: 'Crystal Jewelry',
    },
  ];

  

  // Método auxiliar para generar estrellas (usado en la plantilla)
  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
