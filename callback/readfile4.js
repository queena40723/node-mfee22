const { readFile } = require("fs");
let readfilePromise = new Promise((resolve,reject)=>{
    readFile("test.txt", "utf-8", (err, data) => {
        if (err) {
          reject(err);
          return;
        }resolve(data);
        // insert to mysql
      });
    })
//例一
// async function main(){
//     try {
//         let result1 = await readfilePromise
//         console.log(result1)
//     }
//     catch(err){
//         console.log('catch one error', err);
//     }
        
// }
//例二
async function main(){
    console.log('123') //123

    let result1 = await readfilePromise //error產生要抓他，不然後面的程式 會崩潰
    console.log('456') //不出現 後續都不會產生

    console.log(result1)
    console.log('123')

}
main();  

//IFEE
// (async()=>{
//     try {
//         let result1 = await readfilePromise
//         console.log(result1)
//     }
//     catch(err){
//         console.log('catch one error', err);
//     }
// })();
