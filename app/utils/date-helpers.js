import { format as borrowersDate } from 'borrowers-dates';

function formatDate(date, format) {
  return borrowersDate(date, format);
  //return window.moment(date).format(format);
}

export {
  formatDate
};
