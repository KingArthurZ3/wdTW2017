
$(document).ready(function(){
    $("#myAnimation").hide();
    var buttonCounter = 0;

    function takepicture(videoOutput, width, height) {
        var canvas = document.getElementById('canvas'),
            photo  = document.querySelector('photo');

        canvas.width  = width;
        canvas.height = height;
        canvas.getContext('2d').drawImage(videoOutput, 0, 0, width, height);
        var data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
    }

    function myMove() {
        var elem = document.getElementById("#myAnimation");
        var pos = 0;
        var id = setInterval(frame, 10);
        function frame() {
            if (pos == 1000) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
        }
    }

    $('#fakeSelector1').click(function(){


        // if(buttonCounter == 1){
        //     alert("don't even think about pressing this again, you have been warned");
        // }
        if(buttonCounter==1){
            alert("congratulations, you've won a prize!");
            $('#myAnimation').show();
            $('#myAnimation').myMove();
        }
        buttonCounter++;
    });



})
