// Index

const util = require("./util");

const addStuff = function(inputString) {
    const modifiedInput = inputString + "x5";
    const utilOutput = util.prefixUtil(modifiedInput);
    const modifiedOutput = utilOutput + "mod";
    return modifiedOutput;
}

module.exports.addStuff = addStuff;
