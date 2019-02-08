const index = require("../index");
const util = require("../util");

jest.mock("../util");

describe("addStuff() tests", function () {
    test("addStuff() calls prefixUtil", () =>{
        const testInput = "foo";
        const targetOutput = "ughmod";
        const testOutput = index.addStuff(testInput);

        expect(testOutput).toEqual(targetOutput);
        expect(util.prefixUtil).toHaveBeenCalledTimes(1);
    });
});
