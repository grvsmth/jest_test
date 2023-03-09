import {jest} from '@jest/globals';

jest.unstable_mockModule("../../node_modules/luxon/build/es6/luxon.js",
                         () => ({
                             "DateTime": {
                                 "fromFormat": jest.fn()
                             }
                         })
                        );

describe("dates tests", function () {
    let datesModule, DateTimeModule;

    beforeEach(async () => {
        datesModule = await import("../dates.js");
        DateTimeModule = await import("../../node_modules/luxon/build/es6/luxon.js");
    });

    test("dates.extractHour() calls DateTime", () =>{
        const testInput = "foo";
        const targetOutput = "mock hour";

        const mockDateTime = {"hour": jest.fn(() => "mock hour")};

        const dates = datesModule.default
        const {DateTime} = DateTimeModule;
        DateTime.fromFormat = jest.fn().mockReturnValue(mockDateTime);


        const testOutput = dates.extractHour(testInput);

        expect(testOutput).toEqual(targetOutput);
        expect(DateTime.fromFormat).toHaveBeenCalledTimes(1);
    });
});
