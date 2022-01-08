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


    readfilePromise
    .then((result)=>{
      console.log(result)
    })
    .catch((err)=>{
      console.log(err)
    })

