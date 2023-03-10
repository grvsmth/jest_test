import {jest} from '@jest/globals';

/* The module can be mocked with unstable_mockModule() */
jest.unstable_mockModule("../util.js",
                         () => ({
                             "default": {
                                 "prefixUtil": jest.fn(),
                                 "doublePrefixUtil": jest.fn()
                             }
                         })
                        );

describe("addStuff() tests", function () {
    let index, utilModule;

    /**
     * The modules can be imported with async/await, either in the test
     * functions, or in a beforeEach() function.
     */
    beforeEach(async () => {
        index = await import("../index.js");
        utilModule = await import("../util");
    });

    /**
     * Retrieving the .default property and {cherryPicking} don't seem
     * to work directly with dynamic import statements, so we have to
     * assign them to variables afterwards.
     */
    test("addStuff() calls prefixUtil", () => {
        const testInput = "foo";
        const targetOutput = "ughmod";

        const util = utilModule.default;
        util.prefixUtil = jest.fn(() => "ugh");

        const testOutput = index.addStuff(testInput);

        expect(testOutput).toEqual(targetOutput);

        expect(util.prefixUtil).toHaveBeenCalledTimes(1);
        expect(util.prefixUtil).toHaveBeenNthCalledWith(1, testInput + "x5");
    });
});
