import util from "../util";

// jest.mock("../util");

describe("prefixUtil() tests", function () {
    test("prefixUtil() prefixes", () =>{
        const testInput = "foo";
        const targetOutput = "prefixfoo";
        const testOutput = util.prefixUtil(testInput);

        expect(testOutput).toEqual(targetOutput);
    });
});

describe("doublePrefixUtil() tests", function () {

    let mockPrefixUtil = jest.fn();
    
    test("doublePrefixUtil() prefixes twice", () =>{
        const testInput = "foo";
        const targetOutput = "mockPrefixOutput";

        util.prefixUtil = jest.fn().mockReturnValue(targetOutput);
        
        const testOutput = util.doublePrefixUtil(testInput);

        expect(testOutput).toEqual(targetOutput);
    });
});
