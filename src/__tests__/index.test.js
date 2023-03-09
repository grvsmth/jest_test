import {jest} from '@jest/globals';

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

    beforeEach(async () => {
        index = await import("../index.js");
        utilModule = await import("../util");
    });

    test("addStuff() calls prefixUtil", () => {
        const testInput = "foo";
        const targetOutput = "ughmod";

        const util = utilModule.default;

        util.prefixUtil = jest.fn(() => "ugh");

        const testOutput = index.addStuff(testInput);

        expect(testOutput).toEqual(targetOutput);
        expect(util.prefixUtil).toHaveBeenCalledTimes(1);
    });
});
