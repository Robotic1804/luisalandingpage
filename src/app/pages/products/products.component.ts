import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductsComponent implements OnInit {
  @Input() products: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  setShowQuiz(show: boolean) {
    // Handle quiz display logic here
    console.log('Show quiz:', show);
  }

}
