const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./router')
const methodOverride = require('method-override')
var port = process.env.PORT||3090;
//database
const db = require('./database/key').MongoURI;
mongoose.set('useUnifiedTopology', true);
mongoose.connect(db,{ useNewUrlParser: true })
.then(console.log('mongodb connected properly'))
.catch(err=>{console.log(err)});
app.use(methodOverride('_method'))

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('public'))
app.set('view engine','ejs')
app.use(routes)

app.listen(port,()=>
{
  console.log(`listening at ${port}`)
})