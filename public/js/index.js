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
    $("#btn").on('click', function () {
        console.log("#btn")
        var message = $('.message-text').html();
        console.log(message)
        var date = new Date();
        var data = {
            User: user,
            Message: message}
        $.ajax({
            type: "POST",
            url: "https://lima-backend.herokuapp.com/messages",
            data: data,
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
            $(".chat-box").append("<div id='message'>"+lastMessage.User+':'+"<div id='message-box'>"/*+date.toDateString(),user, ": ", */+lastMessage.Message+"</div></div>")
    })
    });
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

    function updateMessages() {
        fetch("https://lima-backend.herokuapp.com/message")
            .then((response) => response.json())
            .then(renderMessages);
    }
    const renderMessages = (messages) => {
        messages.forEach(boxprint);
        let objDiv = document.getElementById("box");
        objDiv.scrollTop = objDiv.scrollHeight;
    };
    function boxprint(message){
        $(".chat-box").append("<div id='message'>"+message.User+':'+"<div id='message-box'>"/*+date.toDateString(),user, ": ", */+message.Message+"</div></div>")

    }
    updateMessages();
    setInterval(updateMessages, 500);
});