$(document).ready(function(){
    // ASCII code for alphabet (a-z = 97-122)
    var correctNumber = Math.floor(Math.random() * 25) + 97;

    $(document).on('keypress', function(event){
        var pressedKey = event.keyCode;
        console.log(event.key);
        console.log(event.keyCode);

        for (var i = 0; i < 9; i++){
            if(pressedKey === correctNumber){
                // if guess is correct
            } else{
                // if guess is incorrect
            }
        };

        $('#userGuesses').append(` ${event.key},`);
    })
})
