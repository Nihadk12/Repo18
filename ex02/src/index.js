let fifteenArray = [];
function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}
function* insideGenerator1() {

    for (i = 1; i<=5;i++) {
        var x = yield i;
        fifteenArray.push(i+"#");
    }
    

}
function* insideGenerator2 () {
    for ( i = 10; i<=15;i++) {
        fifteenArray.push(i+"#");
        var x = yield i;
        
    }
   
}
function* insideGenerator3() {
    for (var i=6; i<=9; i++) {
         var x = yield i;
         fifteenArray.push(i+"#");
    }
    
}

const iterator = myGenerator();




for(var itt of iterator) {
    console.log(iterator.next().value);
}

i=0;
while (i<16) {
    console.log(fifteenArray[i]);
    i++
}


module.exports = {fifteenArray,myGenerator};


