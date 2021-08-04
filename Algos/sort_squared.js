function sortMe(array){
    temp = []
    for(i = 0; i < array.length; i++){
        temp.push(array[i] * array[i])
    }
    temp.sort((a,b) => a - b);
    return temp
}

console.log(sortMe([5,7,3,8,1,9]))