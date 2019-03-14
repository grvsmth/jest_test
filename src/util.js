function prefixUtil(inputString) {
    return "prefix" + inputString;
}

function doublePrefixUtil(inputString) {
    let outputString = inputString;
    for (let i = 0; i < 2; i++) {
        outputString = exportFunctions.prefixUtil(outputString);
    }
    return outputString;
}

const exportFunctions = {
    prefixUtil,
    doublePrefixUtil
}
export default exportFunctions;
