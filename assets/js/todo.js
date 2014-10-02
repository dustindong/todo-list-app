$(document).ready(function(){
    $('button').click(function(){
        var item = $('input[name=additem]').val();
        $('ol').append('<li>'+ item +' <span class="delete">Done</span></li>');
    });

$(document).on("click", ".delete", function(){
   $(this).parent('li').remove();
    });

});
