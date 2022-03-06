let user = sessionStorage.getItem("user")
console.log(user)
if(user==null){
    console.log("no user")
    $.get('https://lima-backend.herokuapp.com/auth', function(response){
       user = response.user
       $(".header-box").append('<p>'+user+'</p>')
    })
}

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
        
        $.ajax({
            type: "POST",
            url: "https://lima-backend.herokuapp.com/messages",
            data: {"message":message},
            success: function(result) {
                console.log('success')
            },
            error: function(result) {
                alert('error');
            }
        })
        $.get('https://lima-backend.herokuapp.com/message', function(response){
            console.log(response)
            let lastMessage = response[response.length-1]
            console.log(lastMessage)
            $(".chat-box").append("<div id='message'>"+user+':'+"<div id='message-box'>"/*+date.toDateString(),user, ": ", */+lastMessage.message+"</div></div>")
    })
    });
});