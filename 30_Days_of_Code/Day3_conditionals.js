const weird = (N) => {
    if (N % 2 != 0) {
        console.log("Weird")
    } else if (N % 2 == 0 && N >= 2 && N < 6) {
        console.log("Not Weird")
    } else if (N % 2 == 0 && N >= 6 && N < 21) {
        console.log("Weird")
    } else if (N % 2 == 0 && N > 20) {
        console.log("Not Weird")
    }
}