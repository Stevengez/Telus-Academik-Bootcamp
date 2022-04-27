function cb(error, result){
    console.log(error, result);
}

function apiFunction(request, callback){
    if(!(typeof callback === "function")){
        throw new Error("Invalid Call back");
    }

    let result = {};
    let err = null;

    callback(err, result);
}

apiFunction(undefined, false);