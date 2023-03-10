import {jest} from '@jest/globals';

/* The module can be mocked with unstable_mockModule() */
jest.unstable_mockModule("../../node_modules/luxon/build/es6/luxon.js",
                         () => ({
                             "DateTime": {
                                 "fromFormat": jest.fn()
                             }
                         })
                        );

describe("dates tests", function () {
    let datesModule, DateTimeModule;

    /**
     * The modules can be imported with async/await, either in the test
     * functions, or in a beforeEach() function.
     *
     * We can use the same relative path as used in the script, and the
     * moduleNameMapper defined in package.json will translate them.
     */
    beforeEach(async () => {
        datesModule = await import("../dates.js");
        DateTimeModule = await import("../../node_modules/luxon/build/es6/luxon.js");
    });

    /**
     * Retrieving the .default property and {cherryPicking} don't seem
     * to work directly with dynamic import statements, so we have to
     * assign them to variables afterwards.
     */
    test("dates.extractHour() calls DateTime", () =>{
        const testInput = "foo";
        const targetOutput = "mock hour";

        const dates = datesModule.default
        const {DateTime} = DateTimeModule;

        const mockDateTime = {"hour": jest.fn(() => "mock hour")};
        DateTime.fromFormat = jest.fn().mockReturnValue(mockDateTime);

        const testOutput = dates.extractHour(testInput);
        expect(testOutput).toEqual(targetOutput);

        expect(DateTime.fromFormat).toHaveBeenCalledTimes(1);
        expect(DateTime.fromFormat).toHaveBeenNthCalledWith(1,
                                                            testInput,
                                                            dates.selectFormat
                                                           );
    });
});
