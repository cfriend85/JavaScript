// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump 
// in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. 
// If it is possible, return YES, otherwise return NO.


const Kangaroos = (x1, v1, x2, v2) => {
    let RooOne = x1 + v1
    let RooTwo = x2 + v2
    for(let i = 0; i < 10000; i++){
        if(RooOne == RooTwo){
            return "YES"
        } else {
            RooOne += v1
            RooTwo += v2
        }
    }
    return "NO"
}
Kangaroos(0,3,4,2)
Kangaroos(0,2,5,3)