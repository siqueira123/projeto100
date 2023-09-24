setTimeout(function()
{
    imgId = "foto1";
    takeSelfie();
    speakData = "Tirando sua selfie em 10 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
}, 5000);

function takeSelfie()
{
    console.log(imgId);

    Webcam.snap(function(data_uri) {
        if(imgId=="foto1"){
            document.getElementById("result1").innerHTML = '<img id="foto1" src="'+data_uri+'">';
        }
        if(imgId=="foto2"){
            document.getElementById("result2").innerHTML = '<img id="foto2" src="'+data_uri+'">';
        }
        if(imgId=="foto3"){
            document.getElementById("result3").innerHTML = '<img id="foto3" src="'+data_uri+'">';
        }
    });
}