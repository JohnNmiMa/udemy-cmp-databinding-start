import {Component, OnInit, Input, OnDestroy, ElementRef} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, OnDestroy {
    @Input('gameTime') oddTime: ElementRef;

    constructor() { }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
