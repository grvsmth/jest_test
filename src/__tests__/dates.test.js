const dates = require("../../src/dates");
const Moment = require("moment");

jest.mock("moment", () => {
    return jest.fn().mockImplementation(() => {
        return {"hour": jest.fn(() => "mock hour")};
    });
});


describe("dates tests", function () {
    test("dates.extractHour() calls Moment", () =>{
        const testInput = "foo";
        const targetOutput = "mock hour";
        const testOutput = dates.extractHour(testInput);

        expect(testOutput).toEqual(targetOutput);
        expect(Moment).toHaveBeenCalledTimes(1);
    });
});
