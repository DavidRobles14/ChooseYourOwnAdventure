// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "The Goblet of Fire is infont of you.",
            choices: [
                {
                    text: "Put your name in the Goblet of Fire",
                    nextLevel: "selection",
                },

                {
                    text: "Don't put your name in the Goblet of Fire",
                    nextLevel: "nothing",
                },
            ]
        },
        
        death: {
            message: "The dragon turned you to ash.",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                }
            ]
        },
        
        secondDeath: {
            message: "The dragon jumped ontop of you and crushed your body.",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                }
            ]
        },

        selection: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You have been selected! Someone is in front of you with a bag.",
            choices: [
                {
                    text: "Put your hand in the bag",
                    nextLevel: "dragon",
                },
                
                {
                    text: "Your too scared to put your hand in the bag",
                    nextLevel:"nothing"
                }
            ]
        },

        nothing: {
            message: "Your lame, take risks some times.",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                }
            ]
        },
        
        dragon: {
            message: "You are standing in front of the dragon you pull out of the bag.",
            choices: [
                {
                    text: "Attack the dragon head on",
                    nextLevel: "death"
                },
                
                {
                    text: "Run to the left",
                    nextLevel: "secondMove",
                }
            ]
        },
        
        secondMove: {
            message: "You are taking cover behind a rock.",
            choices: [
                {
                    text: "Attack the dragon from the left side",
                    nextLevel: "thirdMove"
                },
                
                {
                    text: "Attack the dragon from the right side",
                    nextLevel: "death",
                }
            ]
        },
        
        thirdMove: {
            message: "You have dameged the dragon badly.",
            choices: [
                {
                    text: "Run to try and dodge his next attack",
                    nextLevel: "forthMove"
                },
                
                {
                    text: "Hide behind the Rock again",
                    nextLevel: "secondDeath",
                }
            ]
        },
        
        forthMove: {
            message: "The dragon tryed to hit you with fire but missed",
            choices: [
                {
                    text: "Attack the dragon with all you have left",
                    nextLevel: "win"
                },
                
                {
                    text: "Run to try and dodge his next attack",
                    nextLevel: "death",
                }
            ]
        },
        
        win: {
            message: "You have hit the dragon and it died",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start"
                }
            ]
        },

    }
};
