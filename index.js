const addDays = require("date-fns/addDays");
function getDate(days) {
  return addDays(new Date(22, 08, 2020), days);
}

module.exports = getDate;
