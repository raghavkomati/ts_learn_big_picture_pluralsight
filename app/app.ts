import { Player } from './player';
import { Game } from './game';
import * as Helpers from './utility';

// /// <reference path="player.ts" />
// /// <reference path="game.ts" />
// /// <reference path="utility.ts" />


let newGame: Game;

document.getElementById('startGame')?.addEventListener('click', () => {
    const player = new Player();
    player.name = Helpers.getValue('playername');

    const problemCount: number = Number(Helpers.getValue('problemCount'));
    const factor: number = Number(Helpers.getValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});

document.getElementById('calculate')?.addEventListener('click', () => {
    newGame.calculateScore();
});

// function startGame() {
//     //starting the game

//     let playerName: string | undefined = getInputValue('playername');

//     // var messageElement = document.getElementById("messages");

//     // messageElement!.innerText = 'Welcome!';
//     logPlayer(playerName);
//     postScore(100, playerName);
//     postScore(-1);
// }

// function logPlayer(name: string = 'MultiMath player'): void {
//     console.log(`New game starting for player:  ${name}`);
// }


// function postScore(score: number, playerName: string = 'MultiMath player'): void {
//     const  scoreElement: HTMLElement | null = document.getElementById('postedScores');
//     let logger: (v: string) => void;
//     if (score < 0) {
//         logger = logError;
//     } else {
//         logger = logMessage;
//     }

//     scoreElement!.innerText = `${score} - ${playerName}`;
//     logger(`score: ${score}`)
// }

// const logMessage = (message: string): void => console.log(message);

// function logError(message: string) {
//     console.error(message);
// }

// document.getElementById('startGame')!.addEventListener('click', startGame);

// let myResult: Result = {
//     playerName: 'Marie',
//     score: 5,
//     problemCount: 5,
//     factor: 7
// };

// let player: Person = {
//     name: 'Daniel',
//     formmatNumber: () => 'Dan'
// };

// const firstPlayer: Player = new Player();
