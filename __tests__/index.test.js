const index = require("../index");
const testIndex = index.testIndex;

jest.mock("../util", () => { return {"testUtil": jest.fn(() => "bar")}; });

describe("testIndex() tests", function () {
    test("testIndex() calls testUtil", () =>{
        const testInput = "foo";
        const targetOutput = "barmod";
        const testOutput = testIndex(testInput);

        expect(testOutput).toEqual(targetOutput);
    });
});
