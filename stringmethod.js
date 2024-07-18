let string = "Hello"
// console.log((string))

console.log("StarWith = ",string.startsWith("H")); // Return the if a String Starts with Specified String ["H" = True]

console.log("EndWith = ",string.endsWith("o")); // Return the True if a String Ends with Specifide String ["o" = True]

console.log("Includes = ",string.includes("Hello")); // Return True or False if an Array Contain Specified String ["Hello" = True]

console.log("IndexOf = ",string.indexOf("l")); // Return the Index of the Specified Character or SubString ["l" = 2 Index]

console.log("Repeat = ",string.repeat(2)); // Return a string with Number of Copies of a String ["Hello Hello"]

console.log("Search = ",string.search("e")); // Matches a String Aganist a Regular String ["e" = 1 Index]

console.log("Split = ",string.split("")); // Split a String into Array ["H","e","l","l","o"]

console.log("ToLpwerCase = ",string.toLowerCase("HELLO")); // Convert a String into LowerCase Letter ["hello"]

console.log("ToUpperCase = ",string.toUpperCase("hello")); // Convert a String into UpperCase Letter ["HELLO"]

let str = "    Hello    World"; // Remove WhiteSpace Starting Point and Ending Point in String
console.log("Trim = ",str.trim());

let str1 = "Hello World"; // Return of Part of String (Start, End ?)
console.log("Slice = ",str1.slice(1,3)); // output = "el"

let con1 = "Hello";
let con2 = "World";
console.log("Concat = ",con1.concat("World")); // Join Two or More String ["HelloWelcome"]

let joint = con1 + con2; // Concat Join More String
console.log("Comcat = ",joint);

let rep = "Hello"
console.log("Replace = ",rep.replace("H","Y")); // Replace a String or SubString in a String ["Welcome"]

let rep1 = "Hello";
console.log("Replace = ",rep1.replaceAll("lo","p")); // Replace a String or SubString in a String ["Welcome"]

let cahr = "Hello"
console.log("ChartAt = ",cahr.charAt(0)); // Index Wise Print in String









