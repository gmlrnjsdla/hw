let a = []; 

 for (let i = 0; i < 100; ++i) { 
     a[i] = Math.floor(Math.random() * 100 + 1); 
} 
 
 a.sort((a, b) => a - b); 
 
 console.log('[ ' + a.join(', ') + ' ]'); 