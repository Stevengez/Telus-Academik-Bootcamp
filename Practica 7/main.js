function f1(){
    console.log("F1");
}

function f2() {
    console.log("F2");
}

function f3() {
    console.log("F3");
    setTimeout(f5, 90);
}

function f4() {
    console.log("F4");
}

function f5() {
    console.log("F5");
}

setTimeout(f1, 105);
setTimeout(f2, 15);
setTimeout(f3, 10);
setTimeout(f4, 100);
