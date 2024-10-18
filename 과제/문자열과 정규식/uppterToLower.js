const assert = require('assert');


function upperToLowerX(str) {
    return str.replace(/([A-Z])/g, matchedStr => {
        return `*${matchedStr.toLowerCase()}*-`;
    });
}
function reverse(str) {
    return str.replace(/([A-Z]*)([a-z]*)/g, (_matchedStr, upper, lower) => {
        // console.log(upper, lower);
        return `${upper?.toLowerCase()}${lower ? lower.toUpperCase() : ''}`;
    });
}

assert.deepStrictEqual(reverse('Senior Coding Learning JS'), 'sENIOR cODING lEARNING js');
assert.deepStrictEqual(reverse('HeLLo'), 'hEllO');

