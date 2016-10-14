import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';

@Component({
    selector: 'si-cmp-b',
    template: `
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
    </div>
    <hr>
    <div>
        <button (click)="onGet()">Refresh Storage</button>
        <h3>Storage</h3>
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
        <h3>Received Value</h3>
        <p>{{value}}</p>
    </div>
  `,
    //providers meta-data will tell to Angular 2 which object we want to use in the body of this component.
    providers :[LogService]
})
export class CmpBComponent implements OnInit {

    constructor(private logService: LogService){
    }

    value = '';
    items: string[] = [];

    onLog(value: string) {
        this.logService.writeToLog(value);
    }

    onStore(value: string) {
    }

    onGet() {
    }

    ngOnInit() {
    }
}
