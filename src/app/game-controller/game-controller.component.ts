import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-game-controller',
    templateUrl: './game-controller.component.html',
    styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {
    @Output() gameTime = new EventEmitter<number>();
    GameControlText: String = 'Start Game';
    gameTimer = 0;
    timerFunc;

    constructor() { }

    ngOnInit() {
    }

    onStartGame() {
        if (this.GameControlText === 'Start Game') {
            this.timerFunc = setInterval(() => {
                this.gameTime.emit( this.gameTimer++ );
            }, 1000);
            this.GameControlText = 'Stop Game';
        } else {
            clearInterval(this.timerFunc);
            this.gameTimer = null;
            this.gameTime.emit( this.gameTimer );
            this.GameControlText = 'Start Game';
        }
    }

}
