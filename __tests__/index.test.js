const index = require("../index");
const testIndex = index.testIndex;
const util = require("../util");

jest.mock("../util");

describe("testIndex() tests", function () {
    test("testIndex() calls testUtil", () =>{
        const testInput = "foo";
        const targetOutput = "ughmod";
        const testOutput = testIndex(testInput);

        expect(testOutput).toEqual(targetOutput);
        expect(util.testUtil).toHaveBeenCalledTimes(1);
    });
});
