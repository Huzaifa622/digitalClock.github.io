
setInterval(showTime, 1000);

function showTime(){
    let date= new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    document.getElementById('ampm').innerText='PM';
    if(h==0){
        h = 12;
        document.getElementById('ampm').innerText='AM';
    }else if(h > 12){
        h = h-12;
    }
    document.getElementById('hours').innerText = h;
        document.getElementById('Min').innerText = m;
        document.getElementById('sec').innerText = s;
       
    }
    
 

