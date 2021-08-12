const getSecondLargest = (nums) => {
    let large = nums[0]
    let secLarge = nums[0]
    for(let i = 1; i < nums.length; i++){
        if(nums[i] > large){
            secLarge = large
            large = nums[i]
        }
        else if(nums[i] > secLarge && nums[i] < large){
            secLarge = nums[i]
        }
    }
    return secLarge
}


const reverseString = (s) => {
    try {
        s = s.split("").reverse().join("");
    } catch(e) {
        console.log(e.message);
    } finally {
        console.log(s);
    }
}

const isPositive = (a) => {
    if(a > 0){
        return "YES"
    }
    else{
        throw (a === 0? new Error ('Zero Error') : new Error('Negative Error'))
    }
}