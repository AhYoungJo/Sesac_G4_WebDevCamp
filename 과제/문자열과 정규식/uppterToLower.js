const assert = require('assert');

const format_$ = str => str.replace(/([A-Z])([a-z\s]*)/g, '*$1*-$2');

const upperToLower = str => {
    return format_$(str).toLowerCase();
};

const lowerToUpper = str => {
    return format_$(str).toUpperCase();
};

assert.deepStrictEqual(
    upperToLower('Senior Coding Learning JS'),
    '*s*-enior *c*-oding *l*-earning *j*-*s*-',
);
assert.deepStrictEqual(
    lowerToUpper('Senior Coding Learning JS'),
    '*S*-ENIOR *C*-ODING *L*-EARNING *J*-*S*-',
);
