// Arrays Practice

// Q1 ==> For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average marks of the    entire class.

// Answer 1 in For Loop
let Marks = [85,97,44,37,76,60]

let sum = 0;

for(let i=0; i<Marks.length;i++){
    sum = sum + Marks[i];
    console.log("Marks = ",Marks[i])
}
console.log("Sum of Marks = ",sum)
avg = sum/Marks.length;
console.log("Avrage Marks of = ",avg)

// Answer 2 in For Of Loop
let marks = [85, 97, 44, 37, 76, 60];

let Sum = 0;

for(let Val of marks){
    console.log("Marks = ",Val);
    Sum += Val;
}
console.log(`Sum of Marks = ${Sum}`);
let Avg = Sum / marks.length;
console.log(`Avrage Marks of = ${Avg}`);

// Q2 ==> For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them Change the array to store final price after applying offer.

// Answer in For Of Loop
let items = [900, 800, 600, 500, 300, 50];

let i = 0;

for(let Val of I=items){
    console.log(`Value at Index = ${Val}`);
    let Offer = Val / 10;
    items[i] = items[i] - Offer;
    
    console.log(`Offer Value = ${items[i]}`);
    i++;
}

// Answer in For Loop
let Items = [100, 200, 300, 400, 500, 600];

for(let i = 0; i<Items.length; i++){
    console.log(`Items Value = ${Items[i]}`);
    let offer = Items[i] / 10;
    Items[i] -= offer;
}
console.log("Offer value = ",Items);