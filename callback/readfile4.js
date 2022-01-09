const { readFile } = require("fs");
let readfilePromise = new Promise((resolve,reject)=>{
    readFile("text.txt", "utf-8", (err, data) => {
        if (err) {
          reject(err);
          return;
        }resolve(data);
        // insert to mysql
      });
    })

async function main(){
    let result1 = await readfilePromise
    console.log(result1)
}
main();  
