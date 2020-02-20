"use strict";
let myGrades = [100, 100, 90, 73, 78, 94, 86];
let myAverage = 0;
for (let i = 0; i <= myGrades.length - 1; i++) {
    myAverage += myGrades[i];
}
myAverage = myAverage / myGrades.length;
console.log("My grade average is " + myAverage);
//myGrades and myAverage had not been properly defined, I saw this by using "use strict".//
