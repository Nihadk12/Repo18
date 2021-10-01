const one = new Set([1,2,3,4,5]);
const two = new Set([6,4,3,2]);

const unionSet = new Set([...one, ...two]);
const intersectionSet = new Set([...one].filter(one => two.has(one)));
const differenceSet = new Set([...one].filter(x => !two.has(x)))
console.log(differecneSet);

module.exports = {unionSet,intersectionSet,differenceSet}