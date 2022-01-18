const axios = require("axios");
const { readFile } = require("fs/promises");
const moment = require("moment");
const mysql = require("mysql2");
require("dotenv").config();  //.config()是套件dotenv 給的語法
//Create a .env file in the root directory of your project.把資料庫連線資訊放在裡面
//把.env 放進.gitignore

(async () => {
    //[1]連線資料庫
    //process（进程）其实就是存在nodejs中的一个全局变量
    //process.env 返回项目运行所在环境的一些信息
    let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    })
  try {

    // 根據變數去抓取資料
    // [2]從 stock.txt 中讀出檔案代碼
    let stockNo = await readFile("stock.txt", "utf-8");
    // 抓取股票中文名稱，順便確認股票代碼是否存在
    let queryStockName = await axios.get(
      "https://www.twse.com.tw/zh/api/codeQuery",
      {
        params: {
          query: stockNo,
        },
      }
    );
    console.log(queryStockName.data);
    // queryStockName.data.suggestions
    if (
      !queryStockName.data.suggestions ||
      queryStockName.data.suggestions[0] === "(無符合之代碼或名稱)"
    ) {
      throw new Error("查無此代表");
    }
    // 可以到這裡(沒進入if)，表示有資料
    let stockData = queryStockName.data.suggestions[0];
    let stockDatas = stockData.split("\t");
    let stockName = stockDatas[1];

    //[3]儲存股票代碼與名稱進資料庫
    // Using prepared statements
    // to protect from SQL Injection attacks
    let saveNameResult = await connection.execute(
        "INSERT INTO stocks (id, name) VALUES (?, ?)",
        [stockNo, stockName]
      );
      console.log(saveNameResult);

    //自動用今天日期
    let queryDate = moment().format("YYYYMMDD");  //moment套件

    let response = await axios.get(
      "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
      {
        // 這裡可以放一些設定
        // params: 放 query string 的參數
        params: {
          response: "json",
          date: queryDate,
          stockNo,
        },
      }
    );

    // console.log(response.data);
  } catch (e) {
    console.error(e);
  }
  connection.end();
})();