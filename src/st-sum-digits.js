import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  function digitSum(num){
    let sum=0;
    let arr = String(num).split('');
    for (let i=0; i<arr.length; i++) {
      sum=sum + +arr[i];   
  }
    if (String(sum).length>1) {
      digitSum(sum);
    } else {
      console.log(sum);
      return sum;
    }
}
   digitSum(n);
}