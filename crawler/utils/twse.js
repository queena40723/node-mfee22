const axios = require("axios");

async function queryStockName(stockNo){
    let queryStockName = await axios.get(
        "https://www.twse.com.tw/zh/api/codeQuery",
        {
          params: {
            query: stockNo,
          },
        }
      );
      return queryStockName.data;
}

async function queryStockPrice(stockNo,queryDate){
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
        return response.data
}

module.exports = {queryStockName,queryStockPrice}
