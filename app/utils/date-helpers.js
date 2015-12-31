export default function dateHelpers() {
  formatDate: function(date, format) {
    return window.moment(date).format(format);
  }
}
