import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    return Error('arr parameter must be an instance of the Array!');
  } else {
  let newArr = arr;
  
  for (let i=0; i<newArr.length; i++) {
    if (typeof arr[i] === 'string') {
      (newArr[i]==='--discard-next') && newArr.splice(i, 2);
      (newArr[i]==='--discard-prev') && newArr.splice(i-1, 2);
      (newArr[i]==='--double-next') && newArr.splice(i, 1, newArr[i+1]);
      (arr[i]==='--double-prev') && newArr.splice(i, 1, newArr[i-1]);
    } else continue;
  }
  return newArr;
  }
}
