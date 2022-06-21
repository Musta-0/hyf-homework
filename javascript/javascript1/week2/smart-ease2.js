//Flight booking fullname function

function getFullname(firstname, surname, useFormalName, gender) {
    if (typeof firstname !== 'string' || firstname === '') {
       throw new Error('First name must be a non-empty string');
    }
    if (typeof surname !== 'string' || surname === '') {
        throw new Error('sur name must be a non-empty string');
    } 

    if (useFormalName) { 
        if (gender) {
            if (gender === "male"){
                return `Lord ${firstname} ${surname}`;
            }
            else if (gender === "female"){
                return `Lady ${firstname} ${surname}`;
            }
            else{
                throw new Error('Gender must be male or female')
            } 
        }
        else if (gender===''){
            throw new Error('Gender must be a non-empty string')
        }
        else{
            return `Lord ${firstname} ${surname}`;
        }
    }
    else if (useFormalName === '') {
            throw new Error('Formal name must be a non-empty string')        
    }
    else {
        return `${firstname} ${surname}`;
    }
}
console.log(getFullname("Jad", "Sam", "sas", "female"));//Log out 

//two variables assigned to getFullname function.
const fullname1 = getFullname("Benjamin", "Hughes", true);
const fullname2= getFullname("Benjamin", "Hughes", false);

//Log out the two fullname variables.
console.log(fullname1);
console.log(fullname2);



//Event application
function getEventWeekday(days) {    
    const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = new Date();
    return weekDays[(day.getDay() + days) % 7]
}

console.log(getEventWeekday(9));



//Weather wear
function getWear(temperature){
    if (temperature < 16){
        return "pants and a jacket";
    }
    else if (temperature > 18) {
        return "shorts and a T-shirt";
    }
    else {
        return "shorts and light jacket " ;
    }
}
console.log(getWear(0))




//Student manager
const class07Students = [];

//addStudentToClass function
function addStudentToClass(studentName) {
    if (typeof studentName !== 'string' || studentName === '') {
        throw new Error('Student name must be a non-empty string');
    }

    if (class07Students.includes(studentName)) {
        throw new Error(`Student ${studentName} is already in the class`);
    }

    class07Students.push(studentName);
    
    if (class07Students.length>6) {
        if (studentName=="Queen") {
            class07Students.push()
        }
        else if (studentName!=="Queen") {
            throw new Error('Cannot add more students to class 07');
        }
    }
    return class07Students;
}

//function for counting the number of students
function getNumberOfStudents() {
    return class07Students.length;
}

console.log(addStudentToClass("Tommy"));

console.log(addStudentToClass("Tom"));

console.log(addStudentToClass("Sam"));

console.log(addStudentToClass("Mark "));

console.log(addStudentToClass("Jacy"));

console.log(addStudentToClass("Davis"));

console.log(addStudentToClass("Queen"));

console.log(getNumberOfStudents())

console.log(addStudentToClass("Toby"));