const Moment = require("moment");

const extractHour = function(inputDate) {
    const dateMoment = new Moment(inputDate);
    const dateHour = dateMoment.hour();
    return dateHour;
};

module.exports.extractHour = extractHour;
