const angryProfessor = (k,a) => {
    let count = 0;
    for(let i = 0; i <= a.length; i++){
        if (a[i] <= 0) {
            count += 1
        }
    }
    if (count < k) {
        return "YES"
    } else{
        return "NO"
    }
}

console.log(angryProfessor(3, [-1,-3,4,2]))


// A Discrete Mathematics professor has a class of students. 
// Frustrated with their lack of discipline, the professor decides to cancel class if fewer than some number of students are present when class starts. 
// Arrival times go from on time (arrivalTime <= 0) to arrived late (arrivalTime > 0).

// Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.

// It must return YES if class is cancelled, or NO otherwise.

// angryProfessor has the following parameter(s):

// int k: the threshold number of students
// int a[n]: the arrival times of the  students