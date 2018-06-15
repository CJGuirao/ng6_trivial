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
