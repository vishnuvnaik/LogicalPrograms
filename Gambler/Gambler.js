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
    let n = input.questionInt('enter the number of times you want to play');
    console.log(gambling(stake, goal, n));
    gambler.gambling(stake, goal, n);
    return 0;
}
gambleSimulation()