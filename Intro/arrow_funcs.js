const city = 'New York City'

const logCitySkyline = () => {
    let skyscraper = 'Empire State Building'
    return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline())


const plantNeedsWater = (day) => {
    if (day === 'Wednesday'){
        return true
    }
    else{
        return false
    }
}

plantNeedsWater('Tuesday')
console.log(plantNeedsWater('Tuesday'))


const functionName = (param,param2,etc) => {
    // THIS IS HOW YOU CREATE AN ARROW FUNCTION AND HAVE IT BE ASSOCIATED WITH A VARIABLE TO LATER BE CALLED ON
}