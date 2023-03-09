// Index

import util from "./util.js";

export function addStuff(inputString) {
    const modifiedInput = inputString + "x5";
    const utilOutput = util.prefixUtil(modifiedInput);
    const modifiedOutput = utilOutput + "mod";
    return modifiedOutput;
}
