const axios = require('axios');
const { readFile } = require("fs/promises");


(async()=>{
    try {
        let Today = new Date();
        let month = Today.getMonth()+1
        //month從0開始
        if(month<10){
            month = `0${Today.getMonth()}`
        }else{
            month = Today.getMonth()
        }
        
        let queryDate=`${Today.getFullYear()}${month}${Today.getDate()}`
        let stockNo = await readFile("stock.txt", "utf-8");
        let response = await axios.get(
                    "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
                    {
                      params: {
                        response: "json",
                        date: queryDate,
                        stockNo,
                      },
                    }
                  );
                  console.log(response.data);
                } catch (e) {
                  console.error(e);
                }
              })();
