import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-modal',
  templateUrl: './quiz-modal.component.html',
  styleUrls: ['./quiz-modal.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class QuizModalComponent implements OnInit {
  @Input() showQuiz = false;
  @Input() quizQuestions: any[] = [];
  @Input() quizStep = 0;
  
  @Output() showQuizChange = new EventEmitter<boolean>();
  @Output() quizStepChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  nextQuizStep(): void {
    this.quizStep++;
    this.quizStepChange.emit(this.quizStep);
  }

  closeQuiz(): void {
    this.showQuiz = false;
    this.quizStep = 0;
    this.showQuizChange.emit(this.showQuiz);
    this.quizStepChange.emit(this.quizStep);
  }
}
