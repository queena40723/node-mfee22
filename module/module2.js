// exports = module.exports = {};
// return module.exports;
//原本就寫好這兩行代碼
// 模組匯出就是return這個變數=>其實跟a = b賦值一樣， 基本型別匯出的是值， 物件(引用)型別匯出的是引用地址
// exports 和 module.exports 持有相同引用，因為最後匯出的是 module.exports， 所以對exports進行賦值會導致exports操作的不再是module.exports的引用
let name = "default";

function setName(newName) {
  console.log(`Hi,${newName}`);
}

function showName() {
  console.log(name);
}

exports = { setName, showName };
//app.js會無法作用 因為