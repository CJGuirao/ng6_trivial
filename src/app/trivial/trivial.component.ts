import { Component, OnInit, OnChanges } from '@angular/core';
import { RequestService } from '../request.service';
import { Card } from '../model/card';

@Component({
  selector: 'app-trivial',
  templateUrl: './trivial.component.html',
  styleUrls: ['./trivial.component.css']
})
export class TrivialComponent implements OnInit {

  result: any;
  cardArray = new Array<Card>();

  constructor(public service: RequestService) { }

  ngOnInit() {
    this.getApiInfo();
  }

  checkAnswer(cardIndex: number, answerIndex: number) {
    console.log('index: ' + answerIndex);
    this.cardArray[cardIndex].responded = true;
    this.cardArray[cardIndex].answeredIndex = answerIndex;
    if (this.cardArray[cardIndex].answers[answerIndex] === this.cardArray[cardIndex].correct_answer) {
      this.cardArray[cardIndex].correct = true;
    }
  }

  getClass(cardIndex: number, answerIndex: number): string {
    if (this.cardArray[cardIndex].answers[answerIndex] === this.cardArray[cardIndex].correct_answer) {
      return 'btn btn-block btn-success';
    } else if (this.cardArray[cardIndex].answeredIndex === answerIndex && !this.cardArray[cardIndex].correct) {
      return 'btn btn-block btn-danger';
    } else {
      return 'btn btn-block btn-outline-secondary';
    }
  }

  getApiInfo() {
    this.service.getRequest(this.service.baseURL).subscribe(
      data => this.processResult(data),
      error => this.processError(error),
      () => this.processFinal()
    );
  }

  processResult(data: any) {
    for (const item of data.results) {
      this.cardArray.push(new Card(item));
    }
    this.result = this.cardArray;
    console.log(this.cardArray);
  }

  processError(error: any) {
  }

  processFinal() {}

}
