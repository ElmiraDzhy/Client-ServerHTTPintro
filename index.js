const { MyMath } = require("./MyMath");
const MyComponent = require("./MyComponent");
const { fun1, fun2, fun3, fun4, fun5 } = require("./functions");

const res = MyMath.sum(3, 4);

const com = new MyComponent();

console.log(com.render(res));

console.log(fun1());
console.log(fun2());
console.log(fun3());
console.log(fun4());
console.log(fun5());

