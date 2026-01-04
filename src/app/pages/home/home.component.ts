import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappWidget } from '../../components/whatsapp-widget/whatsapp-widget';
import { AboutComponent } from '../about/about.component';
import { ProductsComponent } from '../products/products.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { LeadMagnetModalComponent } from '../lead-magnet-modal/lead-magnet-modal.component';
import { QuizModalComponent } from '../quiz-modal/quiz-modal.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    WhatsappWidget,
    AboutComponent,
    ProductsComponent,
    TestimonialComponent,
    LeadMagnetModalComponent,
    QuizModalComponent,
    FooterComponent,
  ],
  standalone: true,
})
export class HomeComponent implements OnInit {
  showLeadMagnet = false;
  email = '';
  faqOpen: number | null = null;
  showQuiz = false;
  quizStep = 0;

  ngOnInit() {}

  products = [
    {
      name: 'Immunocal® Immune Support',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
      description: 'Patented glutathione precursor for immune health',
      benefits: [
        'Boost immunity in 30 days',
        '78 global patents',
        "Listed in Physician's Desk Reference",
      ],
      results: 'Feel stronger and more energized',
    },
    {
      name: 'Therapeutic Aromatherapy Oils',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop',
      description: '100% pure essential oils for wellness',
      benefits: [
        'Better sleep from first night',
        'Reduce stress in 15 minutes',
        'Natural mood enhancement',
      ],
      results: 'Feel calm and centered daily',
    },
    {
      name: 'Deep Relief Pain Cream',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
      description: 'Natural formula with arnica & menthol',
      benefits: [
        'Pain relief in 15 minutes',
        'No harsh chemicals',
        'Targets sore muscles & joints',
      ],
      results: 'Move freely without discomfort',
    },
    {
      name: 'Healing Crystal Jewelry',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
      description: 'Handcrafted with genuine gemstones',
      benefits: ['Balance energy naturally', 'Hypoallergenic materials', 'Beautiful & meaningful'],
      results: 'Carry positive energy everywhere',
    },
  ];
  testimonials = [
    {
      name: 'Maria S.',
      text: "Luisa's products changed my life! The pain cream works in minutes and the aromatherapy oils help me sleep better.",
      rating: 5,
      product: 'Pain Cream & Oils',
      verified: true,
      date: '2 weeks ago',
    },
    {
      name: 'James R.',
      text: "I've been using Immunocal for 3 months. My energy levels are amazing and I haven't been sick once!",
      rating: 5,
      product: 'Immunocal',
      verified: true,
      date: '1 month ago',
    },
    {
      name: 'Sofia M.',
      text: 'The crystal jewelry is stunning and I love the personal service. Luisa truly cares about her customers!',
      rating: 5,
      product: 'Crystal Jewelry',
      verified: true,
      date: '3 weeks ago',
    },
  ];

  faqs = [
    {
      q: 'How do I purchase products?',
      a: "Simply click any 'Shop Now' button or contact me directly via WhatsApp. I'll guide you through the entire process and help you choose the perfect products for your needs.",
    },
    {
      q: 'How long does shipping take?',
      a: 'Most orders arrive within 5-7 business days. All products ship directly from Sensation Brands and Immunotec with full tracking information.',
    },
    {
      q: 'Is there a guarantee?',
      a: "Yes! All products come with a 30-day satisfaction guarantee. If you're not completely happy, we'll make it right.",
    },
    {
      q: 'Can I return products?',
      a: 'Absolutely. You have 30 days to return any product for a full refund. Your satisfaction is my priority.',
    },
    {
      q: 'Do you offer personalized recommendations?',
      a: "Yes! That's my specialty. Contact me and I'll provide a free personalized consultation to find the perfect products for your wellness goals.",
    },
  ];

  quizQuestions = [
    {
      question: "What's your main wellness goal?",
      options: ['Better sleep & relaxation', 'Pain relief', 'Immune support', 'Beauty & self-care'],
    },
    {
      question: 'How quickly do you need results?',
      options: ['Immediate (15-30 min)', 'Short term (1-2 weeks)', 'Long term (1-3 months)'],
    },
    {
      question: "What's your budget range?",
      options: ['Under $50', '$50-$100', '$100-$200', '$200+'],
    },
  ];

  toggleFaq(index: number): void {
    this.faqOpen = this.faqOpen === index ? null : index;
  }

  handleEmailSubmit(): void {
    if (this.email) {
      alert(`Thank you! Your 10% discount code will be sent to ${this.email}`);
      this.showLeadMagnet = false;
      this.email = '';
    }
  }

  nextQuizStep(): void {
    if (this.quizStep < this.quizQuestions.length - 1) {
      this.quizStep++;
    } else {
      this.quizStep++;
    }
  }

  closeQuiz(): void {
    this.showQuiz = false;
    this.quizStep = 0;
  }

  closeLeadMagnet(): void {
    this.showLeadMagnet = false;
  }

  getStars(rating: number): any[] {
    return Array(rating).fill(0);
  }
}
