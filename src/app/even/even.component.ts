import { Component, OnInit, Input, ElementRef} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
    @Input('gameTime') evenTime: ElementRef;

    constructor() { }

    ngOnInit() {
    }
}
