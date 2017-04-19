
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

    $('.box').hide();

    $('#fakeSelector1').on('click', function() {

        if(buttonCounter == 1){
            alert('please dont click this again');

        } else if(buttonCounter == 2) {
            alert('congratulations! Youve been randomly selected as todays winner! click again to claim your prize');
        }
        else if(buttonCounter == 3) {
            $('.box').show();
            $('.box img').toggleClass('clicked');
        }
        buttonCounter++;
    });

})
