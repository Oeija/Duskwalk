const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors()); 

const quests = [
    "Dance like nobody’s watching for 2 minutes.",
    "Make a funny face and hold it for 1 minute.",
    "Talk like a pirate for the next 5 minutes.",
    "Pretend to be a chicken and flap your arms for 2 minutes.",
    "Sing your favorite song at the top of your lungs (with no music).",
    "Try to balance a spoon on your nose for 1 minute.",
    "Do a dramatic reading of your most recent text message.",
    "Pretend you are a robot and walk like one for 3 minutes.",
    "Take a selfie with your most ridiculous pose.",
    "Do a cartwheel or try to do one (even if you can't).",
    "Tell a joke to a random person nearby (even if it’s corny).",
    "Try to juggle with anything you can find (like socks or fruit).",
    "Imitate your favorite animal for 3 minutes.",
    "Post a funny picture or meme on social media and tag a friend.",
    "Send a random emoji message to a friend.",
    "Pretend to be a waiter/waitress and serve your family or friends.",
    "Make a weird sound every time you take a breath for the next minute.",
    "Reenact a scene from your favorite movie with exaggerated emotion.",
    "Speak in rhymes for the next 3 minutes.",
    "Find a random object and create a backstory for it in 1 minute.",
    "Go outside and do 10 jumping jacks in public.",
    "Call a friend and sing 'Happy Birthday' to them, even if it’s not their birthday.",
    "Eat something you’ve never tried before (but it’s safe!).",
    "Do 10 pushups, no matter where you are.",
    "Do 10 sit-ups in a row.",
    "Try to hold a plank position for 1 minute.",
    "Go for a walk outside, even if the weather is cold.",
    "Stand in front of a mirror and say 3 positive things about yourself out loud.",
    "Go to the nearest store and ask if they sell something ridiculous (e.g., invisible ink).",
    "Text someone you haven’t talked to in a while and say 'hi.'",
    "Take a cold shower for 1 minute.",
    "Run up and down the stairs 10 times.",
    "Do a random act of kindness for someone in your house or workplace.",
    "Challenge yourself to say 'yes' to something you would normally say no to.",
    "Spend 5 minutes meditating or doing breathing exercises.",
    "Take a brisk walk or jog around the block.",
    "Stand up and stretch like you’ve never stretched before for 1 minute.",
    "Send a message to someone you admire and tell them why they inspire you.",
    "Try to walk across the room with your eyes closed (safely!).",
    "Step outside and take a few deep breaths in the fresh air.",
    "Try to make a sandwich with 5 ingredients you’ve never tried together.",
    "Do a weird dance in front of your mirror for 1 minute.",
    "Try to do a handstand for at least 10 seconds.",
    "Draw a silly picture with your non-dominant hand.",
    "Pretend you’re on a cooking show and 'prepare' an imaginary meal.",
    "Create a funny meme using a random photo you have in your gallery.",
    "Walk around your house backward for 2 minutes.",
    "Take a 'nap' in the most random place in your house.",
    "Write a poem about your favorite food.",
    "Tell a story with a funny accent (even if it’s bad!)."
];


app.get('/random-quests', (req, res) => {
    const randomQuests = [];
    const shuffledQuests = quests.sort(() => 0.5 - Math.random()); 

    for (let i = 0; i < 1; i++) {
        randomQuests.push(shuffledQuests[i]);
    }

    res.json(randomQuests);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
