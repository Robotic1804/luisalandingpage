import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { WhatsappWidget } from '../../components/whatsapp-widget/whatsapp-widget';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterLink, WhatsappWidget],
  standalone: true
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() { }
  
  products = [
    {
      name: 'Therapeutic Aromatherapy Oils',
      image: 'images/oil.png',
      description:
        '100% pure essential oils for relaxation, focus, or home wellness. Perfect for diffusers, massage, or self-care rituals.',
    },
    {
      name: 'Deep Relief Pain Cream',
      image: 'images/cream.png',
      description:
        'Fast-acting, natural formula with arnica, menthol, and botanical extracts to soothe sore muscles and stiff joints.',
    },
    {
      name: 'Healing Crystal Jewelry',
      image: 'images/Jewelry.png',
      description:
        'Handcrafted necklaces & bracelets featuring genuine stones like amethyst, rose quartz, and tiger’s eye for balance and positive energy.',
    },
    {
      name: 'Clean Beauty Essentials',
      image: 'images/beautiy.jpg',
      description:
        'Gentle, toxin-free skincare: nourishing lip balms, body butters, and more—crafted for everyday radiance.',
    },
  ];
}
