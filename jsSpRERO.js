// №1
/* 
let patternExpression = /ab+a/g;
let str = 'aa aba abba abbba abca abea';
let result = str.replace(patternExpression, '!');
// №2
let test = 'aa aba abba abbba abca abea';
let newTest = test.replace(/ab*a/g, '!');
// №3
let str = 'aa aba abba abbba abca abea';
console.log(str.replace(/ab?a/g, '!'));
*/
// №4
let str = 'aa aba abba abbba abca abea';
let pattern = /ab*a/g;
console.log(str.replace(pattern, '!'));

