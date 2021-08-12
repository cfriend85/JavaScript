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