/* CHALLENGE 13 - Template Literals

Create carInfo() function that
will return info about each car.

Car is considered cheap if it's price is <= 20000
Car is considered expensive it it's price is > 20000
*/

"use strict";

var cars = [
  { brand: "Honda", price: 13000 },
  { brand: "Rolls-Royce", price: 120000 },
];

// Write carInfo() function here
var carInfo = ({ brand, price }) => {
  if (price === 13000)
    console.log(`My\
                ${brand} is ${price} and its cheap car`);
  else
    console.log(`Price of my ${brand} is ${price} \
   and its expensive car`);
};

cars.forEach((car) => console.log(carInfo(car)));
/* Price of my new Honda is 13000$
 and it is cheap car. */

/* Price of my new Rolls-Royce
 is 120000$ and it is expensive car. */
