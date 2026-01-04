import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


 interface Testimonial {
   name: string;
   product: string;
   text: string;
   rating: number;
   image?: string;
   verified: boolean;
   date: string;
   result?: string; // Resultado específico logrado
 }


@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
  standalone: true,
  imports: [CommonModule],
})
  
 
  
  
  
  
export class TestimonialComponent {
  @Input() testimonials: Testimonial[] = [
    {
      name: 'Maria G.',
      product: 'Deep Relief Pain Cream',
      text: 'After years of chronic back pain, this cream changed my life. I use it every night and can finally sleep without pain for the first time in years.',
      rating: 5,
      verified: true,
      date: '2 weeks ago',
      result: 'Pain-free in 15 minutes',
    },
    {
      name: 'Carmen R.',
      product: 'Therapeutic Aromatherapy Oils',
      text: "My anxiety was out of control. These oils became my daily ritual. The lavender scent relaxes me instantly. I can't live without them.",
      rating: 5,
      verified: true,
      date: '1 month ago',
      result: 'Anxiety reduced in days',
    },
    {
      name: 'Ana M.',
      product: 'Healing Crystal Jewelry',
      text: 'I was skeptical at first, but this amethyst necklace helps me stay centered during my stressful workday. I feel more balanced and positive.',
      rating: 5,
      verified: true,
      date: '3 weeks ago',
      result: 'More energy & mental clarity',
    },
    {
      name: 'Laura T.',
      product: 'Clean Beauty Essentials',
      text: "My sensitive skin has never been better. These products are so gentle and effective. The lip balm is the best I've ever tried in my life.",
      rating: 5,
      verified: true,
      date: '5 days ago',
      result: 'Radiant skin in 1 week',
    },
    {
      name: 'Patricia S.',
      product: 'Deep Relief Pain Cream',
      text: 'As a nurse, I spend hours on my feet. My feet and legs suffered terribly. This cream is miraculous, I apply it after every shift and the relief is immediate.',
      rating: 5,
      verified: true,
      date: '1 week ago',
      result: 'Faster recovery time',
    },
    {
      name: 'Isabel R.',
      product: 'Therapeutic Aromatherapy Oils',
      text: 'I bought these oils for meditation and they exceeded all my expectations. My house smells amazing and my meditation practice improved 100%. Totally recommended.',
      rating: 5,
      verified: true,
      date: '2 days ago',
      result: 'Better sleep quality',
    },
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }
}
