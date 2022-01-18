for(let i=0;i<5;i++){
        setTimeout(()=>{
            console.log(i);
        },1000)
}
//01234
//let 最小作用域是{}(block scope)
//形成5個 for{i=0,clear
1,2,3,4}