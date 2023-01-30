// En variabel kan deklareras på två olika sätt.
// let: beter sig som vi är vana vid och lever inom det scope vi deklarerar den;
// I de allra flesta fall är det ´let´ man vill använda.
// Variabler i JavaScript är dynamiskt typade.
// Detta innebär att en variabel i JavaScript antar den datatyp man lägger i den.

// let letVar = 2;
// console.log(letVar);
// console.log("Tadaaa!");

// const constVar = 5;
// console.log(constVar);
// console.log("Tadaaa!");

// Till skillnad från var i C# som är en hårt typad variabel så kan en variabel i JavaScript byta datatyp.
// var varVar = null;
// // Variabler
// const constVar = 1;
// let letVar = 2;

// if (varVar) {
//   varVar = 10;
// }
// console.log(constVar);
// console.log(letVar);
// console.log(varVar);

// const name = "Niklas";
// const age = 35;

// const presentationText = `hej ${name},
//                     du är
// ${age} gammal`;
// console.log(presentationText);

//Arrayer
// const arr = ["1", 1, true];
// const arr = ["a", 1, [true, [1, "v"]]];
// // const arr = ["a", "b", "c"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i][1][1]);
// }
// for (const key in arr) {
//   console.log(key);
// }

//Functions
//Detta funkar för att en funciton, precis som en var "hoistas" alltså hivas
// upp till toppen av scriptet
console.log(myFunction(1, 2));

function myFunction(a, b) {
  return a + b;
}
//Detta funkar inte eftersom en const eller let måste deklareras innan den används
console.log(myArrowFunction(1, 2));
const myArrowFunction = (a, b) => {
  return a + b;
};
