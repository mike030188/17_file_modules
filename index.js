// Module Packege -> FILE
// console.log(require("module").wrapper); => exports, require, module, __filename, __dirname 
// console.log(arguments); => Modulle: ....., path: ['/path korsatiladi] => require("./hisob.js");

const calculate = require("./hisob.js");
 
const natija = calculate.kopaytirish(50, 30);
console.log("Natija:", natija);


console.log("================================");

const natija2 = calculate.qoshish(77, 33);
console.log("Natija:", natija2);


