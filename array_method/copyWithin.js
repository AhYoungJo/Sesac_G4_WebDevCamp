const array1 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]


//target, start, end 모두 음수, 양수 사용 가능하나, array길이 내에 있어야 한다.
//음수일 때는 -array.length <= target < 0
//target < -array.length이면, 0이 사용됩니다.
//양수일 때는 target >= array.length이면, 아무것도 복사되지 않습니다.