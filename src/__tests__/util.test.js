//const util = require("../util");
import {prefixUtil, doublePrefixUtil} from "../util";

// jest.mock("../util");

describe("prefixUtil() tests", function () {
    test("prefixUtil() prefixes", () =>{
        const testInput = "foo";
        const targetOutput = "prefixfoo";
        const testOutput = prefixUtil(testInput);

        expect(testOutput).toEqual(targetOutput);
    });
});

describe("doublePrefixUtil() tests", function () {
    test("doublePrefixUtil() prefixes twice", () =>{
        const testInput = "foo";
        const targetOutput = "prefixprefixfoo";
        const testOutput = doublePrefixUtil(testInput);

        expect(testOutput).toEqual(targetOutput);
    });
});
