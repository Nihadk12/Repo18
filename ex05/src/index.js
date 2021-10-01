let shoppingList = new Map([
    ["Banana"],
    ["Pineapple"],
    ["Pear"],
    ["Carrot"],
    ["Apple"],
    [3],
    [5],
    [2],
    [10],
    [1.5]
]);
var arrKey = [];
var arrValues = [];

    
for(let col of shoppingList.entries()) {
    if(col[0] ===3 || col[0]===5 ||col[0]===2 || col[0]===10 || col[0] ===1.5) {
        //console.log("amount: "+col[0]);
        arrValues.push(col);
    }else{
    //console.log("groceries: "+col[0]);
    arrKey.push(col);
    }
}
var res = [];
for(let i=0; i<5;i++) {
   res [i]= [arrKey[i], arrValues[i]];
   console.log(res);
}
//console.log(arrValues);
//console.log(arrKey);

module.exports = {shoppingList,arrKey,arrValues};
