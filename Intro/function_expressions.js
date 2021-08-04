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