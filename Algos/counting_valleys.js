const valleys = (steps, path) => {
    let valleys = 0; let count = 0;
    for(let i = 0; i < steps; i++){
        if (path[i] === 'U') {
            count += 1
        } else {
            count -= 1
        }
        if (path[i] === 'U' && count == 0) {
            valleys += 1
        }
    }
    return valleys
}

console.log(valleys(8, 'UDDDUDUU'))