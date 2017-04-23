
$(document).ready(function(){
    $("#myAnimation").hide();
    $("#characters").hide();
    var audio = new Audio('.idea/Resources/Danzon_De_Pasion_Sting.mp3');
    var aviAudio = new Audio('.idea/Resources/Koolaid Man.mp3');
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

        if (buttonCounter == 0){
            alert('please dont click this again');

        } else if(buttonCounter == 1) {
            alert('congratulations! Youve been randomly selected as todays winner! click here again to claim your prize');
        }
        else if(buttonCounter == 2) {
            aviAudio.play();
            $('.box').show();
            $('.box img').toggleClass('clicked');
            $('.box img').delay(3000).fadeTo(300,0);

            buttonCounter = 0;
        }
        buttonCounter++;
    });

    $('#fakeSelector2').on('click', function(){
        $("#characters").fadeIn(0,300);

        audio.play();
    });

    $('#fakeSelector3').on('click', function(){

    });


})
