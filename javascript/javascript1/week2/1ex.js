// 1. Create a function that checks whether the student is older than 18, and hence they can get a driving licence.
const age = 18 

function checkAge (x){
    if (x >=18){
        console.log("he can drive");
    }else{
        console.log("he cant")
    }
}
checkAge (2)

// 2. Create a function that checkes whether a person needs a haircut, it takes a number as an argument - months since you got a haircut last time and it prints a message based on conditions, you can add more

const haircut = true
function checkHaircut(month){
if(month <1){
    console.log("dosent need a haircut");
}else if(month <3){
    console.log("dosnt need a haircut");
}else if(month <6){
    console.log("need a haircut");
}else {
    console.log("need a haircut")
}
}
checkHaircut (3)

const globalScopeVariable='i have global scope'

function outerFunction(){
    //function scope A
    console.log(globalScopeVariable);
    const outerFunctionScope ="I am in outer function"
    function innerFunction(){
        // function scope B
        console.log(globalScopeVariable);
        console.log(outerFunctionScope);
    }
    const innerFunctionScope ="innerFunction"
    innerFunction()

}

outerFunction()

let i=15
while(i <=18){
console.log(`your are just ${i} years old, you cant drive yet`)
i++;
}
for(let whatever=0; whatever < 5; whatever++){
    console.log("whatever")
    i++;
}
let whatever= 0