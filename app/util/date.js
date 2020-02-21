/**
 * Converts a Date object into an ISO String representation (truncates milliseconds)
 *
 * @param {Date} date The date to convert
 * @returns {string} An ISO string representation of the date, with milliseconds truncated
 */
function toISODateTime(date) {
  return date.toISOString().replace(/\.\d{3}/g, '');
}

module.exports = { toISODateTime };