let time = 0; 

let repeat = setInterval(msg => { 
    console.log(msg, new Date()); 
    time++; 
    if(time == 10) clearInterval(repeat); 
}, 1000, "1초 간격 현재 시각 : ") 