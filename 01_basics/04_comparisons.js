"use strict";

// 🔍 COMPARISONS & COERCION

console.log("2" > 1);        // ✅ true → "2" is coerced to number
console.log(null > 0);       // ❌ false → null becomes 0, but comparison rules differ
console.log(null == 0);      // ❌ false → loose equality doesn't coerce null to 0
console.log(null >= 0);      // ✅ true → null becomes 0, and 0 >= 0 is true

// ⚠️ Why the weirdness?
// - Comparison operators (>, <, >=, <=) convert `null` to number → 0
// - But `==` treats `null` and `undefined` specially → only equal to each other

// ✅ EQUALITY TYPES:
console.log(2 == "2");       // ✅ true → type coercion
console.log(2 === "2");      // ❌ false → strict check (no type coercion)

// == → loose equality (compares after type coercion)
// === → strict equality (compares value + type)
