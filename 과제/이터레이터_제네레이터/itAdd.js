const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });


function* add() {
    const a = yield '첫 번째 수?';
    const b = yield '두 번째 수?';
    return a + b;
}


const itAdd = add();

rl.on('line', answer => {
    const num = Number(answer);
    if (isNaN(num)) {
        console.error('숫자를 입력하세요.');
        return;
    }
    const { value, done } = itAdd.next(+answer);
    if (done) {
        console.log('total:', value);
        rl.close();
    } else {
        console.log(value);
    }
}).on('close', () => {
    process.exit();
});
