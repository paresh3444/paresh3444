// Loops are used to execute a piece of code again & again

// While Loop is a Entry Control Loop
// Syntax
while(Condition){
    // Do Some Work
}


// Do-While Loop is a Exit Control Loop
// Syntax
do{
    // Do Some Work
}
while(Condition)


// For Loop is Best Loop
// Syntax
for(Inneslazstion; Codition; Increment){
    // do Some Work
}

// For Of Loop Using in Arrays & String
// Syntax
for(let Varible of Varible){
    // do Some Work
}

// Example in For of Loop
let str = "HelloWorld";
let Size = 0;

for(let i of str){
    console.log(i);
    Size++;
}
console.log("String = ",Size);

// For in Loop Using in Objext & Arrays
// Syntax
for(let Objext key in Object Varible){
    // do Some Work
}

// Exmaple in For in Loop
let Student = {
    Name : "Hello",
    Age : 25,
};
for(let i in Student){
    console.log(Student[i])
}


