// Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition
// write a function that returns the winner of the tournament. The input arrays are named competitions and results, respectively. The competitions
// array has elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team
// The results array contains information about the winner of each corresponding competition in the competitions array. Specifically, results[i]
// denots the winner of competitions[i], where a 1 in the results array means that the home team in the corresponding compeition won and a 0 means
// that the away team won.



const tournamentWinner = (competitions, results) => {
    let myArr = []
	for(let i = 0; i < results.length; i++){
		if(results[i] == 0){
			myArr.push(competitions[i][1])
		} else{
			myArr.push(competitions[i][0])			
		}
	}
	let map = myArr.map((a) => myArr.filter((b) => a === b).length)
    return myArr[map.indexOf(Math.max(...map))];
}

console.log(tournamentWinner([["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]], [0,0,1]))
console.log(tournamentWinner([["HTML", "Java"], ["Java", "Python"], ["Python", "HTML"]], [0,1,1]))