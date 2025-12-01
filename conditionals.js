// if statement

let x = 20;
if(x%2 === 0){
    console.log("even");
}
if(x%2 !== 0){
    console.log("odd");
};

//nested if statement

let i = 10;
if(i==10){
    if(i<15){
        console.log("i is smaller than 15");
    }
    if(i<12){
        console.log("i is smaller than 12 too");
    }
    else{
        console.log("i is greater than 15");
    }
}

//if else statement
let t = 10;
if(t<15){
    console.log("i is smaller than 15");
}
else{
    console.log("i is greater than 15")
    
    
}

//else if statement

const p =2;
if(p>0){
    console.log("positive");
}
else if(p<0){
    console.log("negative")
}
else{
    console.log("zero")
}

//nested if else statement
let temp = 25;


    if(temp>30){
        console.log("its hot today");

    }
    else if(temp>20){
        console.log("its a warm day");
    }
    else{
        console.log("its a cold day")
    }
