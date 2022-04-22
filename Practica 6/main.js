// Original values
const originalArray = [2,5,6,7,1,8,9,10];

function removeLowest(){
    let modified = originalArray.slice();

    // Find the lowest value
    let lowest = Math.min(...modified);

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
    let result = [];
    for(let x=start;x<=end;x++){
        result.push(x);
    }
    return result;
}

function rangePrint(start, end, step = 1){
    let result = [];
    for(let x=start;x<=end;x=x+step){
        result.push(x);
    }
    return result;
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
console.log("Range with Step: ", rangePrint(2, 4, 2));

console.log("");
console.log("############ End ############");