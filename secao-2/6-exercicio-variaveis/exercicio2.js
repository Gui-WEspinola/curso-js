let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);

/* 
valores primitivos são imutáveis, 
enquanto referências são mutáveis
*/