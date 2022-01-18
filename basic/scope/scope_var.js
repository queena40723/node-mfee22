// 相當於在全域 var=0
for(var i=0;i<5;i++){
        setTimeout(()=>{
            console.log(i);
        },1000)
}
//55555
//var 最小作用域是function{}(function scope)


for(var i=0;i<5;i++){
    //上面的 i 是 function name(i){} 
    ((i)=>{
        //把var=0 鎖在 function scope
        setTimeout(()=>{
            console.log(i);
        },1000)
    })(i)//立即執行//傳入的參數
}
//01234
