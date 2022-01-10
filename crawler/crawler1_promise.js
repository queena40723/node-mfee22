//安裝->required->
//基於 JS promise

const axios = require('axios');

// axios
//     .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20211201&stockNo=2330&_=1641716312720")
//     .then(function (response) {
//         // handle success
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })



    axios
    .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20211201&stockNo=2330&_=1641716312720")
    .then((response)=>{
        console.log(response.data);
    })
    .catch((error)=>{
        console.log(error);
    })
