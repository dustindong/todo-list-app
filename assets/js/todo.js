$(document).ready(function(){
    $('button').click(function(){
        var item = $('input[name=additem]').val();
        $('ol').append('<li>'+ item +' <button class="delete">Done</button></li>');
    });

$(document).on("click", ".delete", function(){
   $(this).parent('li').remove();
    });

});
