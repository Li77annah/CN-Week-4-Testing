// test functions
const add = (num1, num2) => {
    return num1 + num2
}
console.log (add(1, 2));


const minus = (num1, num2) => {
    return num1 + num2;
}
console.log (minus(3, 4));

let myFaveFilms = ["Some Like It Hot", "Alien", "The Shining", "Psycho"];

const numValue = 7;
console.log (numValue);

let i = 10;
// console.log (i.toString());
console.log(String(i)); 

let j = "123"
console.log(Number(j));

let newObject = (film) => {
    let obj = {
        filmTitle: film,
        greatFilm: true
    }
    return obj
}

// exporting a module to link to another file
module.exports = {
    add,
    minus,
    myFaveFilms,
    numValue,
    i,
    j,
    newObject,
}

