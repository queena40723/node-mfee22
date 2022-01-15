//promise all

let doWork = function (job, timer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`完成${job}`);
        }, timer)
    });
};

let p1 = doWork("刷牙牙", 3000);
let p2 = doWork("吃飯飯",2000);
let p3 = doWork("不想寫作業",5000);

//三個事情都做完，會以最長的時間事情做完後一起傳回來
Promise.all([p1,p2,p3]).then((value)=>{
    console.log(value)
});

