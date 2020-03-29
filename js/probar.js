var zerno = 0,
    moloko = 0,
    yai = 0,
    gold = 0;

function sll(food){
    if(food=='mlk'){gold=gold+moloko; 
                      moloko=0;
    document.getElementById('q_milk').innerHTML = moloko;
    document.getElementById('q_gold').innerHTML = gold;};
    if(food=='eg'){gold=gold+yai; 
                      yai=0;
    document.getElementById('q_egg').innerHTML = yai;
    document.getElementById('q_gold').innerHTML = gold;}
}





function wheatProgress(progid, b1, b2, b3) {
    'use strict';
        document.getElementById(progid).style.display = 'block';//progress bar  
    var start = 0,
        timePro = Math.round(10 * 1000 / 100),
        progressElement = document.getElementById(progid),
        intervalId = setInterval(
            function () {
                if (start > 100) {
                    clearInterval(intervalId);
            if (zerno != undefined) { zerno += 1;}
    document.getElementById(b1).style.display = 'block';
    document.getElementById(b2).style.display = 'block';
    document.getElementById(b3).style.display = 'block';
 document.getElementById('q_wheat').innerHTML = zerno;
                } else {
                    start += 1;
                    progressElement.value = start;
                }
                
            }, timePro
        );
}

function cowProgress(progid, b1, b2, b3) {
    'use strict';
        document.getElementById(progid).style.display = 'block';//progress bar  
    var start = 0,
        timePro = Math.round(20 * 1000 / 100),
        progressElement = document.getElementById(progid),
        intervalId = setInterval(
            function () {
                if (start > 100) {
                    clearInterval(intervalId);
            if (moloko != undefined) { moloko += 1;}
    document.getElementById(b1).style.display = 'block';
    document.getElementById(b2).style.display = 'block';
    document.getElementById(b3).style.display = 'block';
 document.getElementById('q_milk').innerHTML = moloko;
                } else {
                    start += 1;
                    progressElement.value = start;
                }
                
            }, timePro
        );
}


function chProgress(progid, b1, b2, b3) {
    'use strict';
        document.getElementById(progid).style.display = 'block';//progress bar  
    var start = 1,
        timePro = Math.round(30 * 1000 / 100),
        progressElement = document.getElementById(progid),
        intervalId = setInterval(
            function () {
                if (start > 101) {
                    clearInterval(intervalId);
                    document.getElementById(b1).style.display = 'block';
                    document.getElementById(b2).style.display = 'block';
                    document.getElementById(b3).style.display = 'block';}
                else {
                    if ( start == (Math.floor(start/33)*33) ) {
                        if (yai != undefined) { yai += 1; };
                        document.getElementById('q_egg').innerHTML = yai;
                        start += 1;
                        progressElement.value = start;
                } else {
                    start += 1;
                    progressElement.value = start;
                }}                
            }, timePro);
}


