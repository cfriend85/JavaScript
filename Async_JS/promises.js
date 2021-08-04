const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};

const myExecutor = (resolve, reject) => {
    if(inventory.sunglasses > 0){
        resolve("Sunglasses order processed.");
    }
    else{
        reject("That item is sold out.");
    };
}

const orderSunglasses = () => {
    return new Promise(myExecutor);
}  

var orderPromise = orderSunglasses()

console.log(orderPromise)


// Consume Promise
const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let inStock = order.every(item => inventory[item[0]] >= item[1]);
            if (inStock) {
            resolve(`Thank you. Your order was successful.`);
            } else {
            reject(`We're sorry. Your order could not be completed because some items are sold out.`);
            }
        }, 1000);
    })
};
const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue)
}

const handleFailure = (rejectedReason) => {
    console.log(rejectedReason)
}

checkInventory(order)
.then(handleSuccess)
.catch(handleFailure)

// Chain promises

const order = {
    items: [['sunglasses', 1], ['bags', 2]],
    giftcardBalance: 79.82
};

checkInventory(order)
    .then((resolvedValueArray) => {
        return processPayment(resolvedValueArray)
    })
    .then((resolvedValueArray) => {
        return shipOrder(resolvedValueArray)
    })
    .then((successMessage) => {
        console.log(successMessage);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    });


// Promise.all

const onFulfill = (itemsArray) => {
    console.log(`Items checked: ${itemsArray}`);
    console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:

const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.'); 
const  checkBags = checkAvailability('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses, checkPants, checkBags])
    .then(onFulfill)
    .catch(onReject);