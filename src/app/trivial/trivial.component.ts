import { Component, OnInit } from '@angular/core';
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

  checkAnswer(index: number) {
    console.log('index: ' + index);
    this.cardArray[0].responded = true;
    this.cardArray[0].answeredIndex = index;
    if (this.cardArray[0].answers[index] === this.cardArray[0].correct_answer) {
      this.cardArray[0].correct = true;
    }
  }

  getClass(index: number) {
    if (this.cardArray[0].answers[index] === this.cardArray[0].correct_answer) {
      return 'btn btn-block btn-success';
    } else if (this.cardArray[0].answeredIndex === index && !this.cardArray[0].correct) {
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
