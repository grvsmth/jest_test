// Index

import {prefixUtil} from "./util";

export function addStuff(inputString) {
    const modifiedInput = inputString + "x5";
    const utilOutput = prefixUtil(modifiedInput);
    const modifiedOutput = utilOutput + "mod";
    return modifiedOutput;
}
