
const sec = document.getElementById("sec");
const dec = document.getElementById("dec");
function btn(){
    var timeLeft = 60;
    var countDown = function(){
        const calcSec = timeLeft--;
        sec.innerHTML = calcSec < 10 ? '0' + calcSec : calcSec;
    }
    setInterval(countDown,1000);
}
/* function csb() {
    "use strict";
    const clickMp3 = new Audio('srcFile/audio/coca.mp3')
    clickMp3.play()
        var clickNum = 1;
        var playNum = 0;
        if (document.getElementById('countDownMode').checked) {
            document.getElementById("sec").innerHTML = 5;
                if (document.getElementById('5sec').checked){
                    var clickNum = clickNum++;
                    var timeLeft = 4;
                    if (clickNum % 2 == 1) {
                        var countDownTime = function(){
                            if(timeLeft> -5) {
                            const calcSec = timeLeft--;
                            document.getElementById("sec").innerHTML = calcSec;
                            }else {
                                var playNum = playNum++;
                                document.getElementById('js-btn').textContent = 'Retry';
                                const GOvrMp3 = new Audio('srcFile/audio/2.mp3')
                                GOvrMp3.play()
                                document.getElementById("sec").innerHTML = '';
                            }
                        }
                        setTimeout(countDownTime,1000);
                        setTimeout(countDownTime,2000);
                        setTimeout(countDownTime,3000);
                        setTimeout(countDownTime,4000);
                        setTimeout(countDownTime,5000);
                        setTimeout(countDownTime,6000);
                        setTimeout(countDownTime,7000);
                        setTimeout(countDownTime,8000);
                        setTimeout(countDownTime,9000);
                        setTimeout(countDownTime,10000);
                    }
                };
        } else {
            console.log('checkbox is not checked.');
        }
    } */


            /*count down */
    /*var clickNum = 1;
    if (document.getElementById('countDownMode').checked) {
            if (document.getElementById('5sec').checked){
                if (clickNum % 2 == 1) {
                    document.getElementById("sec").innerHTML = 5;
                    var clickNum = clickNum++;
                    var timeLeft = 4;
                    var count = 0;
                    var end = 10;
                    var interval = 1000;
                    var id = setInterval(
                    function() {
                        if(timeLeft> -5) {
                            const calcSec = timeLeft--;
                            document.getElementById("sec").innerHTML = calcSec;
                            }else {*/
                                /*document.getElementById("js-btn").click();*/
                                /*document.getElementById('js-btn').textContent = 'retry';*/
                                /*const GOvrMp3 = new Audio('srcFile/audio/2.mp3')
                                GOvrMp3.play()*//*
                                document.getElementById("sec").innerHTML = '';
                            }
                        count += 1;
                        if (count == end) {
                        clearInterval(id);
                        }
                    }
                    ,interval
                    )
                }
            };
    } else {
        console.log('checkbox is not checked.');
    }*/