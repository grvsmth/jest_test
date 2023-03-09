import {DateTime} from "../node_modules/luxon/build/es6/luxon.js";

const exports = {"selectFormat": "yyyy-MM-dd"};

exports.extractHour = function(inputDate) {
    const dateTime = DateTime.fromFormat(inputDate, exports.selectFormat);
    const dateHour = dateTime.hour();
    return dateHour;
};

export default exports;
