const exports = {
    "prefixUtil": function(inputString) {
        return "prefix" + inputString;
    }
};

exports.doublePrefixUtil = function(inputString) {
    let outputString = inputString;
    for (let i = 0; i < 2; i++) {
        outputString = exports.prefixUtil(outputString);
    }
    return outputString;
}

export default exports;
