const catAndMouse = (x,y,z) => {
    let CatA = Math.abs(z-x)
    let CatB = Math.abs(z-y)
    if (CatA > CatB) {
        return "Cat B"
    } else if (CatB > CatA) {
        return "Cat A"
    } else{
        return "Mouse C"
    }
}


console.log(catAndMouse(2,5,4))
console.log(catAndMouse(5,2,4))
console.log(catAndMouse(2,2,4))


// Two cats and a mouse are at various positions on a line. You will be given their starting positions. 
// Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. 
// f the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

// You are given q queries in the form of x, y, and z representing the respective positions for cats A and B, and for mouse C. 
// Complete the function  to return the appropriate answer to each query, which will be printed on a new line.

// catAndMouse has the following parameter(s):

// int x: Cat A's position
// int y: Cat B's position
// int z: Mouse C's position