const staircase = (n) => {
    let x = "#"
    let y = " "
    for(let i = 1; i <= n; i++){
        console.log(`${y.repeat(n-i)}${x.repeat(i)}`)
    }
}