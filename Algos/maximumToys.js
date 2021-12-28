// Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. 
// There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, 
// and he wants to maximize the number of toys he buys with this money. Given a list of toy prices and an amount to spend, 
// determine the maximum number of gifts he can buy.

// Note Each toy can be purchased only once.

const maximumToys = (prices, k) => {
    let count = 0;
    prices.sort((a,b) => a - b)
    prices.map((price, i) => {
        if(k >= price){
            k -= price
            count++;
        }
    })
    return count;
}

console.log(maximumToys([33324560,77661073,31948330,21522343,97176507,5724692,24699815,12079402,6479353,28430129,42427721,57127004,26256001,29446837,65107604,9809008,65846182,8470661,13597655,360], 100000))
console.log(maximumToys([1,12,5,111,200,1000,10], 50))