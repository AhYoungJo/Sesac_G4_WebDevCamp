function solution(s) {
    let answer = 0;

    for (let i = 0; i < s.length; i += 1) {
        let stack = [];
        let isValid = true;
        for (let j = 0; j < s.length; j += 1) {
            const c = s[(i + j) % s.length];
            if (c === '(' || c === '[' || c === '{') {
                stack.push(c);
            } else {
                const top = stack.pop();
                if (
                    (c === ')' && top !== '(') ||
                    (c === ']' && top !== '[') ||
                    (c === '}' && top !== '{')
                ) {
                    isValid = false;
                    break;
                }
            }
        }
        if (isValid && stack.length === 0) answer += 1;
    }
    return answer;
}
