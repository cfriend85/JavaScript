const consecutive_array = (statues) => {
    let myStatues = statues.sort((a, b) => a-b)
    let spaces = myStatues[myStatues.length-1] - myStatues[0]
    let result = myStatues.length - 2
    return spaces - result - 1
}


console.log(consecutive_array([6,2,3,8]))