const fizzBuzz = (function (array) {
    const result = [];

    for (const numb of array) {
        if (numb % 3 === 0 && numb % 5 === 0) result.push('FizzBuzz')
        if (numb % 3 === 0) result.push('Fizz');
        numb % 5 === 0 ? result.push('Buzz') : result.push(numb);
    }
    return result;
});
const array = [...Array(100).keys()].map(i => ++i);

console.log(fizzBuzz(array).toString());