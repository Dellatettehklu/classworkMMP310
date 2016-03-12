$(document).ready(function(){
    $("#btn").click(function() {

        var toAdd = $('input[name=checkbox]').val();

        var toAddNum = $("input[name=Shoppingcart]").val();
        $('<div><input name="shopList" type="checkbox">'+ toAddNum+ "   "+ toAdd+'</input></div>').appendTo('.list');

    });

    $('.list').on('click','input',function() {
        $(this).parent().remove();
    });
})
