const Rectangle = (a, b) => {
    let length = a
    let width = b
    let perimeter = 2 * (a+b)
    let area = a * b 
    
    return {length, width, perimeter, area} //challenge specified to return as object
}