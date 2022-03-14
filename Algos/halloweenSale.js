// You wish to buy video games from the famous online video game store Mist.
// Usually, all games are sold at the same price, p dollars. However, they are planning to have the seasonal Halloween Sale next month 
// in which you can buy games at a cheaper price. Specifically, the first game will cost p dollars, and every subsequent game will cost
// d dollars less than the previous one. This continues until the cost becomes less than or equal to m dollars, after which 
// every game will cost m dollars. How many games can you buy during the Halloween Sale?



const halloweenSale = (p, d, m, s) => {
    let count = 0
    while (s >= p) {
        count++
        s -= p
        p = Math.max(p -= d, m)
    }
    return count
}

console.log(halloweenSale(20,3,6,80))
console.log(halloweenSale(20,3,6,85))