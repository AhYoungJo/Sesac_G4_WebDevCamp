const assert = require('assert');
const isEndJaum = require('./isEndJaum.js');

//끝나는 글자가 종성이면,
const iga = str => (isEndJaum(str) ? '이' : '가');
const eunun = str => (isEndJaum(str) ? '은' : '는');
const eulul = str => (isEndJaum(str) ? '을' : '를');
const yiuhya = str => (isEndJaum(str) ? '이어야' : '여야');
const yirang = str => (isEndJaum(str) ? '이랑' : '랑');

assert.strictEqual(`고성군${iga('고성군')}`, '고성군이');
assert.strictEqual(`고성군${eunun('고성군')}`, '고성군은');
assert.strictEqual(`고성군${eulul('고성군')}`, '고성군을');

assert.strictEqual(`강원도${iga('강원도')}`, '강원도가');
assert.strictEqual(`강원도${eunun('강원도')}`, '강원도는');
assert.strictEqual(`강원도${eulul('강원도')}`, '강원도를');
assert.strictEqual(`강원도${yiuhya('강원도')}`, '강원도여야');
assert.strictEqual(`강원도${yirang('강원도')}`, '강원도랑');

assert.strictEqual(`북면${iga('북면')}`, '북면이');
assert.strictEqual(`북면${eunun('북면')}`, '북면은');
assert.strictEqual(`북면${eulul('북면')}`, '북면을');
assert.strictEqual(`북면${yiuhya('북면')}`, '북면이어야');
assert.strictEqual(`북면${yirang('북면')}`, '북면이랑');
