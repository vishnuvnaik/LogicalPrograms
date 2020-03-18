/**
* @description : Coupon code generator
* @param {Coupon.js}
* @return Displays random coupon numbers accrording to the user desired times
**/

couponCode = (number) => {

    try {
        let n = 0;
        let arr = [];
        let rannum;
        while (n < number) {
            /**
             * Loop over till where num is equal to userinput to generate the coupon number.
             */
            rannum = Math.round(Math.random() * 123456789);
            if (!arr.includes(rannum)) {
                arr.push(rannum)
            }
            /**
             * Condition pushs the ranrandom number to the array if the are unique.
             * 
             */
            n++;
        }
        console.log("Coupon Numbers :" + arr);

    } catch (error) {
        console.log(error.message);

    }
}
module.exports = { couponCode }