// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

let schedule = {}

function isEmpty(obj){
    for (let keys in obj){
        return false;
    }
    return true;
}

console.log(isEmpty(schedule))

schedule["8.00"] = "get up";

console.log(isEmpty(schedule));