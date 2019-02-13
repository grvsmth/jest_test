export function prefixUtil(inputString) {
    return "prefix" + inputString;
}

export function doublePrefixUtil(inputString) {
    let outputString = inputString;
    for (let i = 0; i < 2; i++) {
        outputString = prefixUtil(outputString);
    }
    return outputString;
}
