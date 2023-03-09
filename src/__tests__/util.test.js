import {jest} from '@jest/globals';

describe("prefixUtil() tests", function () {
    test("prefixUtil() prefixes", async () =>{
        const testInput = "foo";
        const targetOutput = "prefixfoo";

        const utilModule = await import("../util.js");
        const util = utilModule.default;

        const testOutput = util.prefixUtil(testInput);

        expect(testOutput).toEqual(targetOutput);
    });
});

describe("doublePrefixUtil() tests", function () {

    test("doublePrefixUtil() prefixes twice", async () =>{
        const testInput = "foo";
        const targetOutput = "mockPrefixOutput";

        const utilModule = await import("../util.js")
        const util = utilModule.default;

        const mockPrefixUtil = jest.spyOn(util, "prefixUtil")
            .mockReturnValue(targetOutput);
        
        const testOutput = util.doublePrefixUtil(testInput);

        expect(testOutput).toEqual(targetOutput);
    });
});
