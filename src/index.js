// Index

import util from "./util";

export function addStuff(inputString) {
    const modifiedInput = inputString + "x5";
    const utilOutput = util.prefixUtil(modifiedInput);
    const modifiedOutput = utilOutput + "mod";
    return modifiedOutput;
}
