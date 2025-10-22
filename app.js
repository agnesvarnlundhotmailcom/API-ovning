//Pseudokod
//Steg 1: Hämta elementet för skämtet (joke) och knappen (jokeBtn) från HTML.
//Steg 2: Kör funktionen generateJoke() direkt när sidan laddas.
//Steg 3: Skapa funtionen generateJoke().
//Steg 4: Skapa en inställning (config) för att tala om att vi vill ta emot JSON-data.
//Steg 5: Skicka en förfrågan till https://icanhazdadjoke.com med inställningarna. Konvertera svaret till JSON.
//Steg 6: Hämta skämtet från svaret och visa det i jokeElement på sidan.
//Steg 7: Skapa en eventlyssnare som kör funktionen generateJoke när användaren klickar på knappen.

const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };
    fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
        jokeElement.innerHTML = data.joke;
    });   
}

jokeBtn.addEventListener('click', generateJoke);
