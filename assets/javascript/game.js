$(document).ready(function(){

    $(document).on('keypress', function(event){
        $('#userGuesses').append(` ${event.key},`);
    })

    // ASCII code for alphabet (a-z = 65-90)
    var correctNumber = Math.floor(Math.random() * 25) + 65;

    for (var i = 0; i < 9; i++){

    }
})
