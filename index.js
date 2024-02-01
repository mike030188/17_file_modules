// Module Packege -> FILE
// console.log(require("module").wrapper); => exports, require, module, __filename, __dirname 
// console.log(arguments); => Modulle: ....., path: ['/path korsatiladi] => require("./hisob.js");

// const calculate = require("./hisob.js");
 
// const natija = calculate.kopaytirish(50, 30);
// console.log("Natija:", natija);


// console.log("================================");

// const natija2 = calculate.qoshish(77, 33);
// console.log("Natija:", natija2);


// console.log("=========== account ============");
const Account = require("./account.js");
Account.tellMeAboutClass();
Account.tellMeTime();

console.log("================================");
const myAccount = new Account("Mike", 200000, 35468745644)
myAccount.giveMeDetails();
myAccount.makeDeposit(1000000);

// maseratti 500 000$
myAccount.withdrawMoney(400000);
myAccount.makeDeposit(200000);