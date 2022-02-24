var user

$(function(){
    $("#subbtn").on('click', function() {
        user = $('#example').val();
        console.log(user)
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/message",
            success: function(result) {
                alert('ok');
                console.log('success')
            },
            error: function(result) {
                alert('error');
            }
        })
    });
    $('textarea').on('keydown', function (e) {
        if(code == 13) {  // keycode == 13 (enter)
            $('.textarea-clone').text($(this).val());
        }
    });
    $("#btn").on('click', function () {
        console.log("#btn")
        var message = $('.message-text').html();
        console.log(message)
        var date = new Date();
        $(".chat-box").append("<div id='message'><div id='message-box'>"/*+date.toDateString(),user, ": ", */+message+"</div></div>");
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/messages",
            data: message,
            success: function(result) {
                alert('ok');
                console.log('success')
            },
            error: function(result) {
                alert('error');
            }
        })
    });
});
var chat = {
    responses: [
        'Hello', 'What is your name', 'Nice to meet you'
    ]
}