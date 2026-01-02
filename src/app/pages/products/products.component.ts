import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() showQuizChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  setShowQuiz(show: boolean) {
    this.showQuizChange.emit(show);
  }

}
