//Flight booking fullname function

function getFullname (firstname, surname, useFormalName) {
    if (useFormalName == true) {
        return "Lord " + firstname + " " + surname;
    }
    else {
        return firstname + " " + surname;
    }
}

//two variables assigned to getFullname function.
let fullname1 = getFullname("Math", "Anton", true);
let fullname2= getFullname("Mia", "David");

//Log out the two fullname variables.
console.log(fullname1);
console.log(fullname2);


//What do we do if useFormalName is not given as an argument?
//But what if the person is a woman? Describe how you would fix the getFullname so it also works for women
//below u can see what i did in those cases.

/*
function getFullname(firstName, surName, useFormalName, gender) {
    if (typeof firstName !== 'string' || firstName === '') {
       throw new Error('First name must be a non-empty string');
    }
     if (typeof surName !== 'string' || surName === '') {
        throw new Error('last name must be a non-empty string');
     }
     
    if (useFormalName) {

        //question here, how can i specify (male and female) instead of string, so If something else is written except(male and female), error message shows
         if (typeof gender !== 'string' || gender === '') {
            throw new Error('gender must be a non-empty string');
         }
    
        else if(gender==="male"){
        return `Lord ${firstName} ${surName}`;
        }
        else if(gender==="female"){
        return `Lady ${firstName} ${surName}`;
        }
    }
    else {
        return `${firstName} ${surName}`;
    }
}
console.log(getFullname("Jad", "Sam", "male", "male"));//Log out 
*/

//Event application

function getEventWeekday(Daysback) {
    const day = new Date();
    const weekDays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (i = 0; i < weekDays.length; i++) {
        if(Daysback>7){
            day.setDate(Daysback + weekDays[2]);
        return (weekDays[(day.setDate() + i) % 7]);

        }else if(Daysback<7){
        day.setDate(day.getDate() + Daysback);
        return (weekDays[(day.getDay() + 4 + i) % 7]);
        }
    }
}

  // With todays weekday a tuesday
console.log(getEventWeekday(9)); // Logs out "Thursday"

// With todays weekday a Friday
console.log(getEventWeekday(2)); // Logs out "Sunday




//Weather wear

function getWear(temperature){
    if (temperature<16){
        return "pents and a jacket";
    }
    else if(temperature >=16 && temperature<=18){
        return "shorts and light jacket " ;
    }
    else {
        return "shorts and a T-shirt";
    }
}
console.log(getWear(0))



//Student manager
const class07Students = [];
//addStudentToClass function
function addStudentToClass(studentName) {
    const newStudent=studentName
    class07Students.push(studentName)
    unwantedStudents=class07Students.length>6;

    if (typeof studentName !== 'string' || studentName === '') {
        throw new Error('Student name must be a non-empty string');
     }

     if (class07Students.length !== new Set(class07Students).size) {
        throw new Error(`Student ${studentName} is already in the class`);
     }
     
    if(class07Students.length>6){
        if(newStudent=="Queen"){
            class07Students.push()
        }else if  (newStudent!=="Queen"){
            throw new Error('Cannot add more students to class 07');
        }
      }
     return class07Students;
}


function getNumberOfStudents() {
    return class07Students.length;
}


console.log(addStudentToClass("Tommy "));

console.log(addStudentToClass("Tom"));

console.log(addStudentToClass("Sam"));
console.log(getNumberOfStudents())
