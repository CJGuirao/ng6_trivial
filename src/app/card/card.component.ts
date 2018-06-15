import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  constructor() { }

  ngOnInit() {
  }

  checkAnswer(answerIndex: number) {
    console.log('index: ' + answerIndex);
    this.card.responded = true;
    this.card.answeredIndex = answerIndex;
    if (this.card.answers[answerIndex] === this.card.correct_answer) {
      this.card.correct = true;
    }
  }

  getClass(answerIndex: number): string {
    if (this.card.answers[answerIndex] === this.card.correct_answer) {
      return 'btn btn-block btn-success';
    } else if (this.card.answeredIndex === answerIndex && !this.card.correct) {
      return 'btn btn-block btn-danger';
    } else {
      return 'btn btn-block btn-outline-secondary';
    }
  }

}
