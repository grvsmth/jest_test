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

    /**
     * The modules can be imported with async/await, either in the test
     * functions, or in a beforeEach() function.
     *
     * Retrieving the .default property and {cherryPicking} don't seem
     * to work directly with dynamic import statements, so we have to
     * assign them to variables afterwards.
     *
     * In this case, we need to use .spyOn(), not a full mock, because
     * we are mocking some methods and testing others.
     */
    test("doublePrefixUtil() prefixes twice", async () =>{
        const testInput = "foo";
        const mockOutput = "mockPrefixOutput";

        const utilModule = await import("../util.js")
        const util = utilModule.default;

        const mockPrefixUtil = jest.spyOn(util, "prefixUtil")
            .mockReturnValue(mockOutput);
        
        const testOutput = util.doublePrefixUtil(testInput);

        expect(testOutput).toEqual(mockOutput);
        expect(mockPrefixUtil).toHaveBeenCalledTimes(2);

        expect(mockPrefixUtil).toHaveBeenNthCalledWith(1, testInput);
        expect(mockPrefixUtil).toHaveBeenNthCalledWith(2, mockOutput);
    });
});
