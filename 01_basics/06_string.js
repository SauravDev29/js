"use strict";

// 🔍 STRING — Primitive vs Object

// 🔤 Primitive string
console.log(typeof 'saurav');            // "string"

// 🧱 Object string (wrapper)
console.log(typeof new String('saurav')); // "object"

// ⚖️ Comparison
console.log('saurav' === new String('saurav')); // false (type mismatch)
console.log('saurav' == new String('saurav'));  // true (value match only)

const s1 = 'hello';
const s2 = new String('hello');

console.log(s1 == s2);   // true
console.log(s1 === s2);  // false

// 🧠 Primitive strings are more performant — always prefer them unless object needed

//////////////////////////////////////////
// 🛠️ STRING METHODS — Must-Know Arsenal //
//////////////////////////////////////////

// 🔢 Length
console.log('hello'.length);            // 5

// 🔍 Character access
console.log('saurav'.charAt(2));        // 'u'

// 🧭 Index searches
console.log('saurav'.indexOf('a'));     // 1 → first 'a'
console.log('banana'.lastIndexOf('a')); // 5 → last 'a'

// ✅ Substring checks
console.log('code'.includes('od'));       // true
console.log('hello'.startsWith('he'));    // true
console.log('world'.endsWith('ld'));      // true

// ✂️ Slice and Substring
console.log('abcdef'.substring(2, 5));    // 'cde' → from index 2 to 4
console.log('abcdef'.slice(-3));          // 'def' → last 3 characters

// 🔠 Case conversion
console.log('abc'.toUpperCase());         // 'ABC'
console.log('ABC'.toLowerCase());         // 'abc'

// 🧼 Whitespace cleanup
console.log('  hi  '.trim());             // 'hi'

// 🔁 Replace
console.log('hat'.replace('h', 'c'));     // 'cat' → first occurrence only

// 🪓 Split
console.log('a,b,c'.split(','));          // ['a', 'b', 'c']

// 🔁 Repeat
console.log('hi'.repeat(3));              // 'hihihi'

// ➕ Concat
console.log('hi'.concat(' there'));       // 'hi there'

// 🔥 Pro Tips:
// - `replaceAll()` replaces *all* matches (ES2021+)
// - `match()`, `search()`, `padStart()`, `padEnd()` — great for formatting and regex

