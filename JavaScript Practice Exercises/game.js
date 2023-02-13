const game = [
	{ team: 'Detroit', points: 2 },
	{ team: 'Chicago', points: 1 },
	{ team: 'Chicago', points: 3 },
	{ team: 'Detroit', points: 2 },
	{ team: 'Chicago', points: 3 },
	{ team: 'Chicago', points: 1 },
	{ team: 'Detroit', points: 1 },
	{ team: 'Detroit', points: 2 },
	{ team: 'Chicago', points: 2 },
	{ team: 'Detroit', points: 1 },
	{ team: 'Chicago', points: 1 },
	{ team: 'Detroit', points: 1 },
	{ team: 'Chicago', points: 2 },
	{ team: 'Detroit', points: 3 },
	{ team: 'Chicago', points: 2 }
]





function getDetroitWithLoop(array) {
	let team1Total = 0;
	let team2Total = 0;
    array.forEach(t => {
		if (t.team === "Detroit") {
			team1Total += t.points
		}
	});

	
	array.forEach(t => {
		if (t.team === "Chicago") {
			team2Total += t.points
		}
	});


	if (team1Total > team2Total) {
		return (`Detroit is the winner with ${team1Total} points.`)
	} else {
		return (`Chicago is the winner with ${team2Total} points.`)
	}
}

console.log(getDetroitWithLoop(game));



function getWinner(array) {
    const detroitScores = array.filter(team => team.team === "Detroit").map(score => score.points).reduce((prev, curr) => prev + curr, 0);
    const chicagoScores = array.filter(team => team.team === "Chicago").map(score => score.points).reduce((prev, curr) => prev + curr, 0);
    if (detroitScores > chicagoScores) {
        return (`Detroit is the winner with ${detroitScores} points.`)
    } else {
        return (`Chicago is the winner with ${chicagoScores} points.`)
    }
}

console.log(getWinner(game));