import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AboutComponent implements OnInit {
  whyBuyItems = [
    { icon: "🎯", title: "Personalized Advice", desc: "Free consultation tailored to your needs" },
    { icon: "💬", title: "Direct Support", desc: "Text me anytime on WhatsApp" },
    { icon: "🎁", title: "Exclusive Deals", desc: "Special discounts for repeat customers" },
    { icon: "❤️", title: "Care That Shows", desc: "Follow-up support after every purchase" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
