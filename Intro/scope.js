const city = 'New York City'

const logCitySkyline = () => {
    let skyscraper = 'Empire State Building'
    return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline())

// This one can acess everthing bc it's variables are both global and function scoped


const satellite = 'The Moon'
const galaxy = 'The Milky Way'
const stars = 'North Star'

const callMyNightSky = () => {
    // return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
    return `Night Sky: ${satellite}, ${stars}, and ${galaxy}`
}

console.log(callMyNightSky())

// This one calls on globally scoped variables only



const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
        let region = 'The Arctic';
    if (region === 'The Arctic'){
        let lightWaves = 'Northern Lights'
        console.log(lightWaves);
    }
    
    console.log(lightWaves);
};

logVisibleLightWaves();

// This one calls on a variable that is changed but it's scope is only changed in the if statement once
// out of it it's value goes back to it's original state