

const scores = []



function newScore(name, score) {
    const addScore = {
        name,
        score
    }
    scores.push(addScore);
    return scores;
}

module.exports = {
    newScore
}