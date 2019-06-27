$(document).ready(function(){

    $(document).on('keypress', function(event){
        $('#userGuesses').append(` ${event.key},`);
    })
})
