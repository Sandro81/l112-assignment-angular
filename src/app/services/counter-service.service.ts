import { Injectable } from '@angular/core';

@Injectable()
export class CounterServiceService {

activeToInactiveCounter = 0;
inactiveToActiveCounter = 0;

  constructor() { }

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log(this.activeToInactiveCounter);
  }


  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log(this.inactiveToActiveCounter);
  }

}