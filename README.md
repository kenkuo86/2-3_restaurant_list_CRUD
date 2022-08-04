# 2-3 餐廳清單擴充 CRUD 功能

一個可以在本地端運行的網頁，可以展示一系列的餐廳清單
網頁功能：
1. 使用者可以點擊感興趣的餐廳，觀看更詳細的資訊
2. 使用者可以搜尋餐廳名稱或餐廳類型，快速找到感興趣的餐廳
3. 使用者可以新增餐廳清單
4. 使用者可以編輯既有的餐廳資訊
5. 使用者可以刪除特定餐廳

## Prerequisites - 環境建置與需求

這個專案使用 Node.js + express 作為 server 的運作環境、使用 handlebars 作為模板引擎，並透過 mongoose 連接架設在 mongoDB 上的資料庫

- Node.js (v16.16.0）
- express (v4.16.4）
- express-handlebars (v3.0.0）
- mongoose（v5.9.7）

## Installation and execution - 安裝與執行步驟 

要在你的本地端運行此專案，請參考以下步驟

1. 下載專案
```
git clone https://github.com/kenkuo86/2-3_restaurant_list_CRUD.git
```

2. 打開終端機，移動到專案資料夾後，下載專案所需模組
```
npm install
```

3. 匯入種子資料到資料庫
```
npm run seed
```

4. 開始運行主程式
```
npm run dev
```

此時 console 中應該會顯示 <code>server listen on http://localhost:3000</code> 以及 <code>DB connected</code>，代表專案已經正式開始運作囉！

5. 瀏覽網頁 <br>
點開 http://localhost:3000，就可以開始使用「我的餐廳清單」
