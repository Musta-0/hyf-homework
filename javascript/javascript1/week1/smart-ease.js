// Age-ify (A future age calculator)

// year of birth
const yearOfBirth = 2000;

// future year
const  yearFuture = 2058;

// how old will you be
const age = yearFuture - yearOfBirth;
console.log(`you will be ${age} years old in ${yearFuture}.`)


//Goodboy-Oldboy (A dog age calculator)
// year of dog's birth
const dogYearOfBirth = 2017;

// future year for dog
const  dogYearFuture = 2027;

// how old will the dog be
const dogYear = (dogYearFuture - dogYearOfBirth)*7;

const shouldShowResultInDogYears = true

if (shouldShowResultInDogYears){
    console.log (`Your dog will be ${dogYear} dog years old in ${dogYearFuture}.`);
} 
else{
    console.log(`Your dog will be ${dogYear/7} human years old in ${dogYearFuture}.`);
}


// Housey pricey (A house price estimator)
//Peter's house
const volumeInMetersPeterHouse = 8*10*10;
const gardenSizeInM2PeterHouse = 100;

const housePricePeter = volumeInMetersPeterHouse * 2.5 * 1000 + gardenSizeInM2PeterHouse * 300;
if (housePricePeter< 2500000){
    console.log("Peter paid too much")
}else{
    console.log("peter paid good price for the house")
}

// Julia's house
const volumeInMetersJuliaHouse = 5*11*8;
const gardenSizeInM2JuliaHouse = 70;

const housePriceJulia = volumeInMetersJuliaHouse * 2.5 * 1000 + gardenSizeInM2JuliaHouse * 300;
if (housePriceJulia< 1000000){
    console.log('Julia paid too much')
}else{
    console.log('Julia paid good price for the house')
}