function* multiplication(x) {
  
    var myArr = [];

    for(let i = x*2; i<=24; i*=2) {
        yield i;
        myArr.push[i];
    }
    return myArr;
}

const num = multiplication(3);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);

module.exports = multiplication;