// Code your solution here
function findMatching(drivers,name){
    const matchingDriver = [];
    for (let driver of drivers){
        if (driver === name || driver.toLowerCase() === name.toLowerCase()){
            matchingDriver.push(driver);
        }
    } return matchingDriver;
}

function fuzzyMatch(drivers, name){
    const matchingDriver = [];
    for (let driver of drivers){
        if(driver[0] === name[0]){
            matchingDriver.push(driver);
        }
    } return matchingDriver;
}

function matchName(drivers,string){
    return drivers.filter(driver => driver.name === string);
}