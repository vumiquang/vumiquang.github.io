var displayToast = function(){
    document.getElementsByClassName('toast')[0].style.display = 'block';
    document.getElementsByClassName('toast-icon-close')[0].addEventListener('click',closeToast);
    timingClose();
};

document.getElementById('btn-toast').addEventListener('click',displayToast);

var timingClose = function(){
    document.getElementById('toast-time-close').innerText =  `5 seconds ago` ;
    var x = 4;
    document.getElementById('btn-toast').removeEventListener('click',displayToast);
    var myTimerClose = setInterval(function(){
        document.getElementById('toast-time-close').innerText = x + ` seconds ago` ;
        x-=1;
        if(x == -1){
            clearInterval(myTimerClose);
            document.getElementsByClassName('toast')[0].style.display = 'none';
            document.getElementById('btn-toast').addEventListener('click',displayToast);
        }
    },999);
}

var closeToast = function(){
    for (var i = 1; i < 99999; i++)
        window.clearInterval(i);
    document.getElementById('btn-toast').addEventListener('click',displayToast);
    document.getElementsByClassName('toast')[0].style.display = 'none';
}

