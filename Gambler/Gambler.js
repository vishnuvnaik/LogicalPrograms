/**************************************************************
* @Execution : default node : cmd> Gambler.js
* @Purpose : to study the functionals working.
* @description : Gambling Simulator
* @overview : 
* @author : Vishnu V Dev <vishnuvdev17@gmail.com>
* @version : 1.0
* @since : February 18 2020
***************************************************************/
const gambler = require('./GamblerBL.js');
let input = require('readline-sync')
function gambleSimulation() {
    let stake = input.questionInt('enter the stake amount : - ');
    let goal = input.questionInt('enter your goal :- ');
    let bet = input.questionInt('enter your bet amount :- ');
    let n = input.questionInt('enter the number of times you want to play');
    console.log(gambling(stake, goal, bet, n));
    gambler.gambling(stake, goal, bet, n);
    return 0;
}
gambleSimulation()