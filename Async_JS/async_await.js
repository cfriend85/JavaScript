function withConstructor(num){
    return new Promise((resolve, reject) => {
    if (num === 0){
        resolve('zero');
    } else {
        resolve('not zero');
    }
    });
}

withConstructor(0)
    .then((resolveValue) => {
    console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
});

  // Write your code below:
async function withAsync(num){
    if (num === 0){
        return 'zero';
    } else {
        return 'not zero';
    }
}

withAsync(100)
    .then((resolveValue) => {
    console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
});


  // Native promise version:
function nativePromiseDinner() {
    brainstormDinner().then((meal) => {
        console.log(`I'm going to make ${meal} for dinner.`);
    });
}


  // async/await version:
async function announceDinner() {
    // Write your code below:
    let meal = await brainstormDinner();
    console.log(`I'm going to make ${meal} for dinner.`);
}

announceDinner();


async function makeBeans(){
    let type = await shopForBeans()
    let isSoft = await soakTheBeans(type)
    let dinner = await cookTheBeans(isSoft)
    console.log(dinner)
}

makeBeans()


// Try/Catch
async function hostDinnerParty(){
    try{
        let souffle = await cookBeanSouffle()
        console.log(`${souffle} is served!`)
    }
    catch (error) {
        console.log(error)
        console.log("Ordering a pizza!")
    }
}  

hostDinnerParty()


async function serveDinner(){
    let vegetablePromise =  steamBroccoli()
    let starchPromise =  cookRice()
    let proteinPromise =  bakeChicken()
    let sidePromise =  cookBeans()
    console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
}

serveDinner()


async function serveDinnerAgain(){
    let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()])
    console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`)
}

serveDinnerAgain()