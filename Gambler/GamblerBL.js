/**
* @description : Gambling simulator
* @param {Gambler}
* @return input the stake goal and bet
*/
gambling = (stake, goal, bet, n) => {
    try {
        let win = 0; // assign win and loss to zero 
        let loss = 0;
        while ((stake > 0) && (goal != stake) && (n > 0)) { //while loop for printing of win or loss according to the inputs given
            if (bet > stake) {  //check wheather bet is greater than stack
                console.log('bet must be lesser than stake try again');
                continue;
            }
            x = Math.floor(Math.random() * 10) //random number generation for win and loss calculation
            if (x > 5) {        // if loop to check the status of the game 
                console.log("you won the bet");
                stake = stake + bet;
                win++;
            }
            else {
                console.log("you loss the bet");
                stake = stake - bet;
                loss++;
            }

            console.log("stake amount = ", stake);

        }
        if (stake > goal) { //check stake is greater than goal
            console.log(" You have reached the goal :");

        }
        else {
            console.log("you failed to reach the goal");
        }
        console.log("number of wins = ", win);  //print the results
        console.log("number of loss = ", loss);
        winp = (win) / (win + loss);
        lossp = (loss) / (win + loss);
        console.log("win percentage = ", winp * 100);
        console.log("loss percenetage = ", lossp * 100);
    }


    catch (error) {
        console.log(error)
    }


}
module.exports = { gambling }

