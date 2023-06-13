let a=10;
let b=0;
let waitingdata = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(20);
     },2000)
})
waitingdata.then((data)=>{
    b=data;
    console.log(a+b)
})
