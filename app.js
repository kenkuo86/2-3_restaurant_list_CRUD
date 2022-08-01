// import express
const express = require('express')
const app = express()
const port = 3000

// import mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  
const db = mongoose.connection

db.on('error', () => {
  console.log('DB connection failed')
})

db.once('open', () => {
  console.log('DB connected !')
})

const Restaurant = require('./models/restaurant')

// 引入 json 資料
const restaurantsInfos = require('./restaurant.json')

// import express-handlebars
const exphbs = require('express-handlebars')
const restaurant = require('./models/restaurant')

app.engine('handlebars', exphbs( {defaultLayout: 'main'} ))
app.set('view engine', 'handlebars')

app.use( express.static('public') )

// 查看首頁
app.get('/', (req,res) => {
  Restaurant.find()
    .lean()
    .then(restaurants => {
      res.render('index', { restaurants })
    })
    .catch('error', error => console.log(error))
  
})

// 查看單一餐廳頁面
app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  Restaurant.findById(id)
    .lean()
    .then( restaurant => { res.render( 'show', {restaurant} )} )
    .catch( error => console.log(error))  
})

// 搜尋餐廳
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const noResultMessage = '查無資料，請更換關鍵字或回到首頁'

  const searchedRestaurants = restaurantsInfos.results.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) || restaurant.category.toLowerCase().includes(keyword.toLowerCase())
  })

  // 根據搜尋結果調整頁面資訊
  searchedRestaurants.length ? res.render('index', { restaurant: searchedRestaurants, keyword: keyword }) : res.render('index', { noResultMessage: noResultMessage, keyword: keyword })
})

// 新增餐廳
app.get('/restaurant/add', (req,res) => {
  res.render('create')
})

// 監聽
app.listen(port, () => {
  console.log(`server listen on http://localhost:${port}`)
})