const solve = (meal_cost, tip_percent, tax_percent) => {
    let tip = parseFloat(meal_cost) * tip_percent / 100
    let tax = parseFloat(meal_cost) * tax_percent / 100
    let totalCost = parseFloat(meal_cost) + tip + tax
    console.log(Math.round(totalCost))
}