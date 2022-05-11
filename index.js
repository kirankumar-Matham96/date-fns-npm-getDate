const addDays = require("date-fns/addDays");
function getDate(days) {
  return addDays(new Date(2020, 07, 22), days);
}

module.exports = getDate;
