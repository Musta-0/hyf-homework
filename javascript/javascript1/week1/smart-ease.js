// Age-ify (A future age calculator)

// year of birth
const yearOfBirth = 2000;

// future year
const  yearFuture = 2058;

// how old will you be
const age = yearFuture - yearOfBirth;
console.log("you will be "+ age + " years old in " + yearFuture + "." )


//Goodboy-Oldboy (A dog age calculator)
// year of dog's birth
const dogYearOfBirth = 2017;

// future year for dog
const  dogYearFuture = 2027;

// how old will the dog be
const dogYear = dogYearFuture - dogYearOfBirth;

const shouldShowResultInDogYears = true

if (shouldShowResultInDogYears){
    console.log("Your dog will be "+ dogYear*7 + " dog years old in " + dogYearFuture + "." )
}else{
    console.log("Your dog will be "+ dogYear + " human years old in " + dogYearFuture + "." )
}


// Housey pricey (A house price estimator)
//Peter's house
const volumeInMeters = 8*10*10;
const gardenSizeInM2 = 100;

const housePricePeter = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (housePricePeter< 2500000){
    console.log("Peter paid too much")
}else{
    console.log("peter paid good price for the house")
}

// Julia's house
const volumeInMetersnr2 = 5*11*8;
const gardenSizeInM2nr2 = 70;

const housePriceJulia = volumeInMetersnr2 * 2.5 * 1000 + gardenSizeInM2nr2 * 300;
if (housePriceJulia< 1000000){
    console.log("Julia paid too much")
}else{
    console.log("Julia paid good price for the house")
}