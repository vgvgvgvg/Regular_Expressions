// №1
console.log('a1a a2a a3a a4a a5a aba aca'.replace(/a\da/g, '!'));
// №2
console.log('a1a a22a a333a a4444a a55555a aba aca'.replace(/a\d+a/g, '!'));
// №3
console.log('aa a1a a22a a333a a4444a a55555a aba aca'.replace(/a\d*a/g, '!'));
// №4
console.log('avb a1b a2b a3b a4b a5b abb acb'.replace(/a\Db/g, '!'));
// №5
console.log('ave a#b a2b a$b a4b a5b a-b acb'.replace(/a\Wb/g, '!'));
// №6
console.log('ave a#a a2a a$a a4a a5a a-a aca'.replace(/\s+/g, '!'));