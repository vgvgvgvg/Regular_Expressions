// №1
console.log('aba aea aca aza axa'.replace(/a[bex]a/g, '!'));
// №2
console.log('a1a a3a a7a a9a aba'.replace(/a[3-6]a/g, '!'));
// №3
console.log('aba aea afa aha aga'.replace(/a[a-g]a/g, '!'));
// №4
console.log('aba aea afa aha aga'.replace(/a[a-fj-z]a/g, '!'));
// №5
console.log('aAa aea aEa aJa a3a'.replace(/a[a-fA-D]a/g, '!'));
// №6
console.log('aAXa aeffa aGha aza ax23a a3sSa'.replace(/a[a-z]+a/g, '!'));
// №7
console.log('aAXa aeffa aGha aza ax23a a3sSa'.replace(/a[a-zA-Z]+a/g, '!'));
// №8
console.log('aAXa aeffa aGha aza ax23a a3sSa'.replace(/a[a-z1-9]+a/g , '!'));