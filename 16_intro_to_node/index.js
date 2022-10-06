//jshint esversion:6

var superheroes = require("superheroes");
const supervillains = require("supervillains");

var mySupervillain = supervillains.random();
var mySuperheroes = superheroes.random();

console.log(mySuperheroes + ' vs ' + mySupervillain);