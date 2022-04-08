// you need to store what you are importing first
const { test, expect } = require('@jest/globals');
const { not } = require('micromatch');
const { describe } = require('yargs');
let funcs = require('./app')

// toBe checks values
// toEqual best for objects and arrays

// example of a pass test
test("should equal 5 when passing 2 and 3", () => {
    expect(funcs.add(2, 3)).toBe(5);

})

// example of a fail test
test("should not equal 3 when passing 5 and 4" , () => {
    expect(funcs.minus(5, 4)).toBe(3);
})

// example of test for an array
test("should contain Psycho", () => {
    expect(funcs.myFaveFilms).toContain("Psycho");
});

// example of a test returning not null
test("should not be null" , () => {
    expect(funcs.numValue).not.toBeNull();
})

// example of a test returning truthy
test("should be truthy" , () => {
    expect(funcs.numValue).toBeTruthy();
})

// example of a test returning falsy
test("should be falsy" , () => {
    expect(funcs.numValue).toBeFalsy();
})

// example of a test checking if a number has been converted to a string.
test("should be a string" , () => {
    expect(funcs.i).toBe(10);
})

// example of a test checking if a string has been converted to a number.
test("should not be a string" , () => {
    expect(funcs.j).not.toBe(123);
})

// example of a test checking an object's properties.
test("create object with two properties", () => {
    expect(funcs.newObject("Psycho")).toEqual({ filmTitle: "Psycho", greatFilm: true })
})


