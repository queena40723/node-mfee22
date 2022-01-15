const axios = require('axios');
const { readFile } = require("fs/promises");

(async()=>{
    try {
        let queryDate = "20220115";
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
