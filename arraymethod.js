// Array Length The length property returns the length (size) of an array
// const arr = [10,20,30,40,50,60];
// let size = arr.length;
// console.log(arr)
// console.log(size)

// Array To String The JavaScript method toString() converts an array to a string of (comma separated) array values
// const arr = ["Happy","Vasu","Vansh","Ghori","Jenish"];
// let size = arr.length;
// console.log(arr)
// console.log(size)


let array = [1,2,3,4,5,6];
console.log(array); //Print all Array [1,2,3,4,5,6]

array.at()
console.log("At = ",array.at(2)); // Takes Integer Value and Return the Item at that Index [3]

array.push(8)
console.log("Push = ",array); // Add new Element to the end of Array [1,2,3,4,5,6,7]

array.pop()
console.log("Pop = ",array); // Remove Last Element Form an Array [1,2,3,4,5]

array.fill(3)
console.log("Fill = ",array); // Fill Specified Element in an Array with Value [3,3,3,3,3,3]

array.join()
console.log("Join = ",array.join('+')); // Join the Element of an Array into the String [123456] [1+2+3+4+5+6] 

array.reverse()
console.log("Reverse = ",array); // Reverse the Order of Element in Array [6,5,4,3,2,1]

array.shift()
console.log("Shift = ",array); // Remove the First Element of Array [2,3,4,5,6]

array.unshift(8)
console.log("Unshift = ",array); // Add New Element at Begening of an Array [8,1,2,3,4,5,6]

array.includes()
console.log("Includes = ",array.includes(3)); // Return True or False if an Array Contain Specifide Value [True or False]

array.concat()
console.log("Concat = ",array.concat(10,11)); // Join Two or More Array [1,2,3,4,5,6,10,11]

array.sort()
console.log("Sort = ",array.sort()); // Short the Element of an Array and Return the Refrence of Same Array [6,5,4,3,2,1] = [1,2,3,4,5,6]

console.log("FindInde = ",array.findIndex(el => el >= 3)); // Return the Index of the element in Array [2 Index]

console.log("Filter = ",array.filter(el => el>= 3)); // Filter Out the Element of an Array [4,5,6]

console.log("Every = ",array.every(el => el >= 4)); // Exexute a Function for each Arary Elemetn [4 = False]