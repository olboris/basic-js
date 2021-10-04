import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  str = String(str);

  let opt = {
    repeatTimes: ('repeatTimes' in options && typeof(options.repeatTimes) === 'number') ? options.repeatTimes : 1,
    separator: 'separator' in options ? options.separator : '+',
    addition: 'addition' in options ? String(options.addition) : '',
    additionRepeatTimes: ('additionRepeatTimes' in options && typeof(options.additionRepeatTimes) === 'number') ? options.additionRepeatTimes : 1,
    additionSeparator: 'additionSeparator' in options ? options.additionSeparator : '|',
  };

  let extra = '';
  if (options.additionRepeatTimes > 0) {
    extra = opt.addition;
    for (let i = 1; i < opt.additionRepeatTimes; i++) {
      extra += opt.additionSeparator + opt.addition
    }
  }

  let message = str + extra;
  for (let i = 1; i < opt.repeatTimes; i++) {
      message += opt.separator + str + extra;
  }
  
  return message;
};