// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
// She tabulates the number of times she breaks her season record for most points and least points in a game. 
// Points scored in the first game establish her record for the season, and she begins counting from there


const breakingRecords = (scores) => {
    let max = scores[0];
    let min = scores[0];
    let maxCount = 0;
    let minCount = 0;
    for(let i = 1; i < scores.length; i++){
        if(scores[i] > max){
            max = scores[i]
            maxCount++;
        } else if(scores[i] < min){
            min = scores[i];
            minCount++;
        }
    }
    return [maxCount, minCount]
}

console.log(breakingRecords([10,5,20,20,4,5,2,25,1]));
console.log(breakingRecords([3,4,21,36,10,28,35,5,24,42]));
console.log(breakingRecords([17,45,41,60,17,41,76,43,51,40,89,92,34,6,64,7,37,81,32,50]));