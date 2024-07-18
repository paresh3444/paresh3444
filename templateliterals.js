// Normal Objest Print with Expression
let demo = {
    item : "Pen",
    Price : 25,
};
    console.log("The Cost of", demo.item, "is", demo.Price, "Rupees");

// Objest Print with Expression in Template Literals 
let demo1 = {
    item : "Pen",
    Price : 25,
};

    let output = `The Cost of ${demo1.item} is ${demo1.Price} Rupees`;
    console.log(output);

// Number Print in Template Literals
    let demo3 = `Sum = ${1+2+3}`;
    console.log(demo3);