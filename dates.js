const Moment = require("./node_modules/moment/moment.js");

const extractHour = function(inputDate) {
    const dateMoment = new Moment(inputDate);
    const dateHour = dateMoment.hour();
    return dateHour;
};

module.exports.extractHour = extractHour;
