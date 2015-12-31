import Ember from 'ember';
import DateHelpers from '../utils/date-helpers';

export function formattedDate([date, format]) {
  return DateHelpers.formatDate(date, format);
}

export default Ember.Helper.helper(formattedDate);
