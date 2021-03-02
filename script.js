const enter = "Please enter 1 or 2 for your answer";
const goodbye = "Sorry, Game Over.";
const start = `Welcome to an Hello parody. Press OK to start the game.`;
const q1 = `You've been writing code for six hours straight. Should you...
1. Double check to see if you forgot a semi-colon.
OR
2. Reviewing your work is for losers.
${enter}`;
const goodbye1 = `You forgot a semi-colon and get an error. You missed your deadline. You're fired. ${goodbye}`;
const q2 = `Hello, it's me...
1. I was wondering if after all these lines of code you'd like to read.
OR
2. Wrong Number.
${enter}`;
const goodbye2 = `You don't recognize the voice and hang up ${goodbye}`;
const q3 = `To go over. Everything...
1. Seriously, who is this?
OR
2. They say proof reading can help ya.
${enter}`;
const goodbye3 = `This must be a prank call. ${goodbye}`;
const q4 = `But I ain't done much proofing
1. Hello, can you read me.
OR
2. No I can't read you, we're on the phone.
${enter}`;
const goodbye4 = `This person is crazy ${goodbye}`;
const q5 = `I've been running this line of code and it just isnt working.
1. What is this error, ef me.
OR
2. I don't know what you're talking about.
${enter}`;
const goodbye5 = `You really must have the wrong number. ${goodbye}`;
const q6 = `I forgot what i was doing before you said error on line 3.
1. Did you look at line 3?
OR
2. There are so many commands till I finish.
${enter}`;
const goodbye6 = `Try taking a break. ${goodbye}`;
const q7 = `And a million variables
1. Hello from the JS file. 
I tried this code a thousand times. 
And it keeps telling me that I messed up. 
But when i check it, I cant find out what wrong. 
Any more.
2. Adele?
${enter}`;
const goodbye7 = `Wait... was that Adele? ${goodbye}`;
const q8 = `Suddenly you wake up from a deep sleep. What a weird dream. Should you
1. Ignore it and go to bed, you're clearly tired.
OR
2. Check your JS file before you have to run it at work tomorrow.
${enter}`;
const goodbye8 = `Your code has an error, weirdly it's on line 3 ${goodbye}`;
const win = `You check your work and find that you had an error on line 3. Your boss would have been furious, thank god you listened to your JS file.
Hello, its me.
I was wondering if after all these lines of code, you’d like to read
To go over, everything.
They say proof reading can help ya
But I aint done much proofing.

Hello, can you read me.
I’ve been running this line of code and it just isn’t working.
What is this error, ef me
I forgot what I was doing before you said error on line 3.

There are so many commands till I finish
And a million variables

Hello from the JS file.
I tried this code a thousand times
And it keeps telling me that I’ve messed up
But when I check it I can’t find out what’s wrong 
Any more`;

alert(start)
let userInput = prompt(q1);
if (userInput == 1) {
    userInput = prompt(q2);
    // 2nd conditional statement
    if (userInput == 1) {
        userInput = prompt(q3);
        // 3rd conditional statement
        if (userInput == 2) {
            userInput = prompt(q4);
            // 4th conditional statement
            if (userInput == 1) {
                userInput = prompt(q5);
                //    5th conditional statement
                if (userInput == 1) {
                    userInput = prompt(q6);
                    // 6th conditional statement
                    if (userInput == 2) {
                        userInput = prompt(q7);
                        // 7th conditional statement
                        if (userInput == 1) {
                            userInput = prompt(q8);
                            // 8th conditional statement
                            if (userInput == 2) {
                                alert(win)
                            } else {
                                alert(goodbye8)
                            }
                        } else {
                            alert(goodbye7)
                        }
                    } else {
                        alert(goodbye6)
                    }
                } else {
                    alert(goodbye5);
                }
            } else {
                alert(goodbye4);
            }
        } else {
            alert(goodbye3);
        }
    } else {
        alert(goodbye2);
    }
} else {
    alert(goodbye1);
}