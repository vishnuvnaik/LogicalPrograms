/***************************************************************
* @Execution : default node : cmd> Coupon.js
* @Purpose : to study the functionals working.
* @description : Coupon number generator
* @overview : Random numbers generated as coupon codes
* @author : Vishnu V Dev <vishnuvdev17@gmail.com>
* @version : 1.0
* @since : February 18 2020
***************************************************************/

const Coupon = require('./CouponBL')
let input = require('readline-sync')
function couponn() {
    let number = input.questionInt('enter the number of coupons to be generated')
    console.log(couponCode(number));
    Coupon.couponCode(num);
    return 0;
}
couponn();
