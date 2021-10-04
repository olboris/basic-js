import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (arguments.length > 0) {
    let month = date.getUTCMonth();

    switch (month) {
      case 11:
      case 0:
      case 1:
        message = 'winter';
        break;
      case 2:
      case 3:
      case 4:
        message = 'spring';
        break;
      case 5:
      case 6:
      case 7:
        message = 'summer';
        break;
      default:
        message = 'autumn';
    };
  }
  return 'Unable to determine the time of year!';
}
