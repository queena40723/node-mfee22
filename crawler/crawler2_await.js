const axios = require('axios');
(async()=>{
    try{
        let response=await axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20211201&stockNo=2330&_=1641716312720")
        console.log(response.data);
    }
    catch(error){
        console.log(error);
    }
})();
