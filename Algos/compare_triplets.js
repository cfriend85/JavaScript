const compareTriplets = (a, b) => {
    var alice = 0
    var bob = 0
    for(let i = 0; i < b.length; i++){
        if (a[i] > b[i]){
            alice += 1
        }
        else if( b[i] > a[i]){
            bob += 1
        }
        else
            console.log("Tie!")
    }
    return [alice, bob]
}