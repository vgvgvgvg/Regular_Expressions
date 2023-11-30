// №1
let str = 'ab abab abab abababab abea';
let template = /(ab)+/g;
let result = str.replace(template, '!');
console.log(result);