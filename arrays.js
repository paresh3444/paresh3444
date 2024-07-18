// Arrays is Collection fo Items
// Arrays is Mutable in Javascript

// Example
// Array Print in Index wise
let arr = [10,20,30,40];  // Array Index Start Form '0'
console.log("arr index 0 = ",arr[0]);
console.log("arr index 1 = ",arr[1]);
console.log("arr index 2 = ",arr[2]);
console.log("arr index 3 = ",arr[3]);

// All Array Print
let Arr_All = [10,20,30,40,50,60];
console.log("Arr_All = ",Arr_All);

// Value Change index wise in Array
let Value_Change = [70,80,90,100,210,320];

Value_Change[0] = 90;
console.log("Change Value in Array = ",Value_Change);

// Looping over an Array
// Example in For Loop with String
let Demo1 = ["Hello","Hey","Okay","Hmm"];

for(let i = 0; i < Demo1.length; i++){
    console.log("For Loop = ",Demo1[i]);
}

// Example of FOR OF LOOP with Numberic
let Demo2 = [10,20,30,40,50,60];

for(let data of Demo2){
    console.log("For Of Loop = ",data);
}


