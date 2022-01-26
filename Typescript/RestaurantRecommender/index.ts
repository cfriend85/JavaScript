import restaurants from './restaurants'; //import from CdAcdmy for thier environment

//  SOLUTION

const dollarSigns = '$$';
const deliveryTimeMax = '90';
const maxDistance = 10;
let result : string;
let hour = new Date().getHours();

const priceBracket: number = dollarSigns.length;

const filteredRestaurants = restaurants.filter((restaurant) => {
    if (Number(restaurant.priceBracket) > priceBracket) {
    return false;
    } else if(hour < Number(restaurant.openHour) && hour > Number(restaurant.closeHour)){
    return false;
    } 

    if (restaurant.deliveryTimeMinutes > Number(deliveryTimeMax)) {
    return false;
    }

    if (Number(restaurant.distance) > maxDistance) {
    return false;
    }

    return restaurant;
});

if (filteredRestaurants.length === 0) {
    result = 'There are no restaurants available right now.';
} else {
    result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
}

console.log(result);


// ORIGINAL

// import restaurants from './restaurants';

// const dollarSigns = '$$';
// const deliveryTimeMax = '90';
// const maxDistance = 10;
// let result;

// const priceBracket: string = dollarSigns.length;

// const filteredRestaurants = restaurants.filter((restaurant) => {
//   if (restaurant.priceBracket > priceBracket) {
//     return false;
//   }

//   if (restaurant.deliveryTimeMinutes > deliveryTimeMax) {
//     return false;
//   }

//   if (restaurant.distance > maxDistance) {
//     return false;
//   }

//   return restaurant;
// });

// if (filteredRestaurants.length === 0) {
//   result = 'There are no restaurants available right now.';
// } else {
//   result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].restaurantName}.`;
// }

// console.log(result);



