//[ex1]
// let doWork = function(job,timer){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(`完成${job}`);
//     },timer)
//   });
// };

// doWork("刷牙牙",3000)
// .then((result)=>{
//   let time = new Date();
//   console.log(`${result} at ${time}`);
//   return doWork("吃飯飯",2000);
// })
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

//[ex2]
// let demoPromise = function (a, b, timer) {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           resolve(a * b);
//       }, timer)
//   });
// }
// demoPromise(2, 3, 2000)
//   .then((result) => {
//       console.log(`${result}`)
//       return demoPromise(3, 4, 2000)
//   })
//   .then((result) => {
//       console.log(`${result}`)
//   })
//   .catch((err) => {
//       console.log(`${result}`)
//   })
/////
  let demoPromise = function (a, b, timer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
      console.log("hi");
      resolve()
        }, timer)
    });
  }
  demoPromise(2, 3, 2000)
    .then((result) => {
      resolve()
        console.log(`${result}`)
        return demoPromise(3, 4, 2000)
    })
    // .then((result) => {
    //     console.log(`${result}`)
    // })
    // .catch((err) => {
    //     console.log(`${result}`)
    // })