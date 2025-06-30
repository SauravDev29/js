// String('saurav') → creates a primitive string: 'saurav'

// new String('saurav') → creates a String object, a wrapper around the string
//so

typeof 'saurav' // 'string'
typeof new String('saurav') // 'object'

'saurav' === new String('saurav') // false (primitive vs object)


const s1 = 'hello';
const s2 = new String('hello');

console.log(s1 == s2);  // true (value comparison)
console.log(s1 === s2); // false (type + value, primitive vs object)



console.log('hello'.length);               // 5 → length of the string

console.log('saurav'.charAt(2));           // 'u' → char at index 2

console.log('saurav'.indexOf('a'));        // 1 → first occurrence of 'a'

console.log('banana'.lastIndexOf('a'));    // 5 → last occurrence of 'a'

console.log('code'.includes('od'));        // true → contains 'od'

console.log('hello'.startsWith('he'));     // true → starts with 'he'

console.log('world'.endsWith('ld'));       // true → ends with 'ld'

console.log('abcdef'.substring(2, 5));     // 'cde' → from index 2 to 4

console.log('abcdef'.slice(-3));           // 'def' → last 3 characters

console.log('abc'.toUpperCase());          // 'ABC' → upper case

console.log('ABC'.toLowerCase());          // 'abc' → lower case

console.log(' hi '.trim());                // 'hi' → removes leading/trailing spaces 

console.log('hat'.replace('h','c'));       // 'cat' → replaces first 'h' with 'c'

console.log('a,b,c'.split(','));           // ['a','b','c'] → splits by ','

console.log('hi'.repeat(3));               // 'hihihi' → repeats 3 times

console.log('hi'.concat(' there'));        // 'hi there' → appends ' there'

