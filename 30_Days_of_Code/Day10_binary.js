const main = (n) => {
    var count = 0;
    // to give an array of 1s
    var BinArr = n.toString(2).split('0');
   // if you are not using ES6 the you can also do this
   //	var max = Math.max.apply(null, BinArr)
    var max = Math.max(...BinArr);
    console.log(max.toString().length);
}

// Given a base-10 integer, n, convert it to binary (base-2). Then find and print the base-10 integer denoting the maximum number of consecutive 1's 
// in n's binary representation. When working with different bases, it is common to show the base as a subscript.