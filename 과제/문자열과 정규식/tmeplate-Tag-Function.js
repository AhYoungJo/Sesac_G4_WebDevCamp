const assert = require('assert');

const total = { price: 45000, vat: 4500 };

function fmt([txt, unit], price) {
    return `${txt}${price.toLocaleString().padStart(1)}${unit}`;
}

assert.strictEqual(fmt`주문합계: ${total.price}원`, '주문합계: 45,000원');
assert.strictEqual(fmt`세액합계: ${total.vat}냥`, '세액합계: 4,500냥');
