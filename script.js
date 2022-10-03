function display(n){
    if(n===-1){
        document.querySelector("body").innerText="Happy Independence Day";
        return;
    }
    setTimeout(()=>{
        document.querySelector("body").innerText=n;
        console.log(n);
        display(n-1);
    },1000)
}

display(10)