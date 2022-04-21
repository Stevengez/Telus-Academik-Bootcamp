console.log("##### Pyramid-o-matic ########");
console.log("");

//  ---#    - (3)  # (1)   - + # = 4
//  --# #   - (2)  # (2)   - + # = 4
//  -# # #  - (1)  # (3)   - + # = 4
//  # # # # - (0)  # (4)   - + # = 4


// Set the number of leves the piramid will have
const piramidLevels = 7;

if(piramidLevels < 3){
    console.log("Sorry, I don't work for less than 3 levels");
}else{
    for(let x=1;x<=piramidLevels;x++){
        let level = Array(piramidLevels)
            .fill(" ",0,piramidLevels-x) // Fill spaces to give the pyramid shape
            .fill("# ",piramidLevels-x,piramidLevels+x+1) // And then fill with #'s
            .join('') // Merge the array values into a single string with no separation between valuess
        
        console.log(level);
    }
}

console.log("");
console.log("############ END #############");


