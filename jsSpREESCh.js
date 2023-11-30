// №1
console.log('a.a aba aea'.replace(/a\.a/g, '!'));
// №2
console.log('2+3 223 2223'.replace(/2\+3/g, '!'));
// №3
console.log('23 2+3 2++3 2+++3 345 567'.replace(/2\++3/g, '!'));
// №4
console.log('23 2+3 2++3 2+++3 445 677'.replace(/2\+*3/g, '!'));
// №5
console.log('*+ *q+ *qq+ *qqq+ *qqq qqq+'.replace(/\*q+\+/g, '!'));
// №6
console.log('[abc] {abc} abc (abc) [abc]'.replace(/\[...\]/g, '!'));