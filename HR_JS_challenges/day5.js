const Rectangle = (a, b) => {
    let length = a
    let width = b
    let perimeter = 2 * (a+b)
    let area = a * b 
    
    return {length, width, perimeter, area} //challenge specified to return as object
}

const getCount = (objects) => {
    let count = 0
    for(let i = 0; i < objects.length; i++){
        if(objects[i].x - objects[i].y == 0){
            count += 1
        }
    }
    return count
}


class Polygon {
    constructor(arr){
        this.arr = arr
    }
    
    perimeter(){
        let num = 0
        for(let i = 0; i < this.arr.length; i++){
            num += this.arr[i]
        }
        return num
    }
}