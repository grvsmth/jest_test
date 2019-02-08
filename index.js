// Index

const util = require("./util");
const testUtil = util.testUtil;

const testIndex = function(inputString) {
    const modifiedInput = inputString + "x5";
    const utilOutput = testUtil(modifiedInput);
    const modifiedOutput = utilOutput + "mod";
    return modifiedOutput;
}

module.exports.testIndex = testIndex;
