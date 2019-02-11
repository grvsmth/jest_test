const dates = require("../dates");
const Moment = require("moment");

jest.mock("moment");

describe("dates tests", function () {
    test("dates.extractHour() calls Moment", () =>{
        const testInput = "foo";
        const targetOutput = "whee";
        const testOutput = dates.extractHour(testInput);

        expect(testOutput).toEqual(targetOutput);
        expect(Moment).toHaveBeenCalledTimes(1);
    });
});
