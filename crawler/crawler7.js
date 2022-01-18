const { readFile } = require("fs/promises");
const moment = require("moment"); //日期套件
const connection = require("connection"); //和資料庫連線
const twseSaver = require("./utils/twseSaver"); //儲存資料庫
const twse = require("./utils/twse"); // 去股票網站要資料
const converter = require("./utils/converter"); //轉換資料格式

(async () => {
  //[1]連線資料庫

  try {
    // 根據變數去抓取資料
    // [2]從 stock.txt 中讀出檔案代碼
    let stockNo = await readFile("stock.txt", "utf-8");
    // 抓取股票中文名稱，順便確認股票代碼是否存在
    let stockNameData = await twse.queryStockName(stockNo);
    // 處理股票名稱
    let stockName = converter.parseStockName(stockNameData);

    //[3]儲存股票代碼與名稱進資料庫
    let saveNameResult = await twseSaver.saveStockName(
      connection,
      stockNo,
      stockName
    );

    // 自動用今天的日期
    let queryDate = moment().format("YYYYMMDD");
    //去查資料
    let priceData = await twse.queryStockPrice(stockNo, queryDate);
    //開始處理資料
    let processData = converter.convertPrice(priceData, stockNo);
    console.log(processData);

    //把整理好的資料存進資料庫
    let savePriceResult = await saveStockPrice(connection, processData);
    console.log(savePriceResult);
  } catch (e) {
    console.error(e);
  }
  connection.end();
})();
