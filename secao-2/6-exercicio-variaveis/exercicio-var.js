let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const constA = varA;

varA = varB;
varB = varC;
varC = constA;

console.log(varA, varB, varC);

