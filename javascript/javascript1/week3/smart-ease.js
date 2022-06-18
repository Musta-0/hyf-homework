//Item array removal
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];

const nameToRemove = "Ahmad";
names.splice(1,1);  
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']



//When will we be there??
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
function getThereFaster() {
    //calculation of the required speed to arrive the destination in 3 hours and 34 minutes
    const speficySpeed =(travelInformation.destinationDistance/(3+(34/60)));
    travelInformation.speed =speficySpeed; 

    //calculation of time
    hours = (travelInformation.destinationDistance /travelInformation.speed);
    onlyHours = Math.floor(hours);
    minutes = (hours - onlyHours) * 60;
    onlyMinutes = Math.round(minutes);
    return onlyHours + " hours and " + onlyMinutes + " minutes.";

  }

const travelTime = getThereFaster(travelInformation);
console.log(travelTime);



//Series duration of my life
const seriesDurations = [
    {
      title: "Game of thrones",
      days: 6,
      hours: 11,
      minutes: 38,
    },
    {
      title: "Money Heist",
      days: 1,
      hours: 23,
      minutes: 50,
    },
    {
      title: "Peaky Blinders",
      days: 3,
      hours: 10,
      minutes: 38,
    },
  ];

function logOutSeriesText() {
    let total = 0;

    for (let i = 0;i<seriesDurations.length;i++) {
        const averageLifeSpan = 80;
        totalYearsToMinuts = averageLifeSpan*365.25*24*60;
        seriesDurationsInMinutes = seriesDurations[i].days*24*60+seriesDurations[i].hours*60+seriesDurations[i].minutes;
        percentageCalculation = (seriesDurationsInMinutes/totalYearsToMinuts).toFixed(5);
        
        console.log (`${seriesDurations[i].title} took ${percentageCalculation}% of my life.`);    

        //as u can see below my code dosn't runs automatically with for loop, how can i run it with for loop?    
        const count1 = seriesDurations[0].days*24*60+seriesDurations[0].hours*60+seriesDurations[0].minutes;
        const count2 = seriesDurations[1].days*24*60+seriesDurations[1].hours*60+seriesDurations[1].minutes;
        const count3 = seriesDurations[2].days*24*60+seriesDurations[2].hours*60+seriesDurations[2].minutes;

        total = (total+(+count1)+(+count2)+(+count3))/totalYearsToMinuts;
      }
    console.log (`In total that is ${total} of my life`);
  } 

//note: my values are different than in below comments but it have the same structure 
//Game of thrones took 0.01% of my life
//Sopranos took 0.012% of my life
//The Wire took 0.007% of my life
//In total that is 0.2% of my life
logOutSeriesText(); // logs out the text found above 


//Note taking app

//Save a note
const notes = []
function saveNote (content, id) {
 
    if (content && id) {
        notes.push({content,id});
      } 
    else {
        throw "there must be both content and id";
      }
  }
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]


//Get a note 
function getNote(id) {
    if (typeof id !== "number" || id === '') {
        throw new Error('id must be a number');
      }
    else {
        for (let i = 0;i<notes.length;i++) {
            if (id == notes[i].id) {
                return notes[i];
              }
          }
      }
  }
const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}


//Log out notes
function logOutNotesFormatted() {
    for (let i = 0;i<notes.length;i++){
        console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`);
      }
  }


logOutNotesFormatted(); // should log out the text below
// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry



//Unique feature
// function to search a value in an array of objects
function search(text) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].content === text) {
            console.log(notes[i]);
          }
      }
  }
// test the function 
search("Pick up groceries");