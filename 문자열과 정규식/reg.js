// /pattern/flag

/**
 * common character
 \d(숫자 [0-9]),
 \w (영숫자 [0-9A-z_]), 보통 변수
 \s(공백/탭/줄바꿈),
 .(개행문자 외 모든 문자)
 \D (not숫자 [^0-9]),
 \W (not영숫자 [^0-9A-z_]),
 \S(not공백/탭/줄바꿈),
 \x(16진수 ASCII), \x3131 === 0x3131
 \u(16진수 unicode)
 */

/**
 * operator:
 * {n,m} (n개부터 m개),
 * *(0개 이상{0,}),
 * +(한개 이상 {1,}),
 * ?(없거나 1개 {0,1}),
 * ^ (시작),
 * $ (끝),
 * () (묶음),
 * [] (범위묶음),
 * [^x] (x제외/not),
 * | (OR)
 */

/**
 * flags:
 * i (ignore case),
 * g (global),
 * m (multi-line),
 * y (lastIndex적용),
 * u (unicode전체 지원),
 * s (common-character .에 개행도 포함)
 */


//[]는 범위
//{}는 갯수
//^는 시작, [^]는 not
//$는 끝

//string은 match, 정규식은 test

// 'Senior Coding Learning JS'.replace(/[A-Z]/g, '#');
console.log("🚀 ~ 'Senior Coding Learning JS'.replace(/[A-Z]/g, '#'):", 'Senior Coding Learning JS'.replace(/[A-Z]/g, '#'));


'세종대왕'.replace('왕', '황');  // '세종대황'
'Senior Coding Learning JS'.replace('o', 'O');     // 'SeniOr Coding Learning JS'
'Senior Coding Learning JS'.replaceAll('o', 'O');  // 'SeniOr COding Learning JS'
'Senior Coding Learning JS'.replace(/o/g, 'O');    // 'SeniOr COding Learning JS'
'Senior Coding Learning JS'.replaceAll(/o/, 'O');  // Error 'non-global RegExp'
'Senior Coding Learning JS'.replace(/o/g, 'O');    // 'SeniOr COding Learning JS'
'Senior Coding Learning JS'.replace(/[A-Z]/g, '#'); // '#enior #oding #earning ##'

//group
'Senior Coding Learning JS'.replace(/([A-Z]+)([a-z\s]*)/g, '$1-'); // 'S-C-L-JS-'
'Senior Coding Learning JS'.replace(/([A-Z]+)([a-z\s]*)/g, '$1-$2'); // 'S-enior C-oding..
//`$&`는 $n1 $n2 $n3 ... 를 모두 합친 것
'Senior Coding Learning JS'.replace(/[A-Z]/g, '`$&`');    // '`S`enior `C`oding `L`earning `J``S`'

'1234-2323-2323-2323'.replace(/(\d{4})-(\d{4})-(.*)$/, '$1-####-$3'); 