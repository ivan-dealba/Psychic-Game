$(document).ready(function(){
    // ASCII code for alphabet (a-z = 97-122)
    var correctGuess = Math.floor(Math.random() * 25) + 97;

    console.log(`Guess this ${correctGuess}`);
    var totalWins = 0;
    var totalLosses = 0;
    var guessesLeft = 10;

    $(document).on('keypress', function(event){
        var pressedKey = event.keyCode; 
        // console.log(event.key);
        console.log(event.keyCode);

        if(pressedKey === correctGuess){
            // Increment wins if guess is correct
            totalWins++;
            $('#win').text(`Wins: ${totalWins}`);
            // Reset the letters guessed
            $('#userGuesses').text('Your guesses so far:');
            // Reset guesses left
            $('#attempts').text('Guesses left:');
            // Start new game with new randomized letter
            correctGuess = Math.floor(Math.random() * 25) + 97;
            console.log(`Guess this ${correctGuess}`);
        } else{
            // Note what letter has been guessed
            $('#userGuesses').append(` ${event.key},`);
            // Decrement guesses left if guess is incorrect
            guessesLeft--;
            $('#attempts').text(`Guesses left: ${guessesLeft}`);
                if (guessesLeft === 0){
                    alert('Game over!');
                    // Incremenet losses if guess is incorrect
                    totalLosses++;
                    $('#loss').text(`Losses: ${totalLosses}`);
                    // Reset the letters guessed
                    $('#userGuesses').text('Your guesses so far:');
                    // Reset guesses left
                    $('#attempts').text('Guesses left:');
                    guessesLeft = 10;
                    // Start new game with new randomized letter
                    correctGuess = Math.floor(Math.random() * 25) + 97;
                    console.log(`Guess this ${correctGuess}`);
                }
        }
    })
})
