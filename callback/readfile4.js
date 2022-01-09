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
async function main(){
    try {
        let result1 = await readfilePromise
        console.log(result1)
    }
    catch(err){
        console.log('catch one error', err);
    }
        
}
//例二
// async function main(){
//     let result1 = await readfilePromise
//     console.log(result1)
// }
main();  
