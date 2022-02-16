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
    })  
    $("#btn").on('click', function () {
        console.log("#btn")
        var message = $('.message-text').html();
        console.log(message)
        var date = new Date();
        $("#box").append("<div>"+date.toDateString(),user, ": ", message+"</div>");
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/messages",
            data: { message: "this is my data"},
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