const persons1 = []; 

 
for(let i=0; i<10; ++i){ 
    persons1.push({ name: "홍길동", age: 16 + i }); 
} 
 
const persons2 = Object.assign([], persons1); 
 
console.log(persons2); 