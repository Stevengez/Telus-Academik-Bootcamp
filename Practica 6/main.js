// Original values
const originalArray = [2,5,6,7,1,8,9,10];

function removeLowest(){
    let modified = originalArray.slice();

    // Find the lowest value
    let lowest = modified[0];
    for(let x=0; x<modified.length; x++){
        lowest = modified[x] < lowest ? modified[x] : lowest;
    }

    // Remove all occurrences
    let indexToRemove = modified.indexOf(lowest);
    while(indexToRemove !== -1){
        modified.splice(modified.indexOf(lowest), 1);
        indexToRemove = modified.indexOf(lowest);
    }

    // Return new array
    return modified;
}

function range(start, end){
    return originalArray.slice(start, end);
}

function rangePrint(start, end, step = 1){
    let result = originalArray.slice(start, end);

    console.log(`Print of Range (${start},${end}) , Step: ${step}`);
    for(let x=0;x<result.length;x=x+step){
        console.log(result[x]);
    }
}

function sum(array){
    let sum = 0;
    
    for(let x=0; x<array.length;x++){
        sum+= array[x];
    }
    
    return sum;
}

console.log("####### Array-O-Matic #######");
console.log("");

console.log("Array without Lowest Value:", removeLowest());
console.log("Range between: ", range(2,4));
console.log("Sum of numbers is: ", sum(originalArray));
rangePrint(0,4);

console.log("");
console.log("############ End ############");