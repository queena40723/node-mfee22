/// await =>覺得 promise 還是不夠簡潔
// 希望可以更像是[同步]語言
// await/async是promise的語法糖
//await暫停函式 需要 async function包起來，因為需要一個範圍
// 在 async function 裡遇到 await 就暫停到async function裡的範圍
//try...catch

let doWork = function (job, timer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`完成${job}`);
        }, timer)
    });
};
// await 必須在放在async函式裡
// async function main() {
//     let result1 = await doWork("刷牙牙", 3000)
// }
// main()

    //IFEE 立即執行
    (async() => {
        try{
            let result = await doWork("刷牙牙", 3000);
            let time = new Date();
            console.log(`${result} at ${time}`);
        }catch(err){
            console.error(err,"錯了呦!");
        }
    })();



//原本promise
// doWork("刷牙牙", 3000)
//     .then((result) => {
//         let time = new Date();
//         console.log(`${result} at ${time}`);
//         return doWork("吃飯飯", 2000);
//     })



    // .then((result)=>{
    //   let time = new Date();
    //   console.log(`${result} at ${time}`);
    //   return doWork("不想寫作業",5000);
    // })
    // .then((result)=>{
    //   let time = new Date();
    //   console.log(`${result} at ${time}`);
    //   return doWork("想睡覺了",3000)
    // })
    // .catch((err)=>{
    //   console.error(err,"錯了呦!");
    // }) //catch 後可以再接.then
    // .then((result)=>{
    //   let time = new Date();
    //   console.log(`${result} at ${time}`);
    // });