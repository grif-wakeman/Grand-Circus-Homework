const scores = require("./grades");


describe("Scores Tests", () =>{

    test("Calling newScore function adds a name and score object to the array", () => {
        expect(scores.newScore("Leaf", 78)).toEqual([{name: "Leaf", score: 78}])
    });






})