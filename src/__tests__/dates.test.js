const momentFilePath = "../../node_modules/moment/moment.js";

const dates = require("../dates");
const Moment = require(momentFilePath);

jest.mock(momentFilePath);

console.log(Moment);

describe("dates tests", function () {
    test("dates.extractHour() calls Moment", () =>{
        const testInput = "foo";
        const targetOutput = "whee";
        const testOutput = dates.extractHour(testInput);

        expect(testOutput).toEqual(targetOutput);
        expect(Moment).toHaveBeenCalledTimes(1);
    });
});
