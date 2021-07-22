const express = require('express')
const { findByIdAndRemove } = require('./models/dbSchema')
const router  = new express()
var Note = require('./models/dbSchema')
router.get('/',(req,res)=>
{
 Note.find({}).then((notes)=>
 {
   res.render('index',{notes:notes})
 })

})
router.get('/create',(req,res)=>
{
  res.render('create')
})
router.post('/',(req,res)=>
{
  Note.create(req.body).then(()=>
  {
    res.redirect('/')
  }).catch(err=>{
    console.log(err)
    res.render('create')
  })
})
router.delete('/:id',(req,res)=>
{
  Note.findByIdAndRemove(req.params.id)
  .then(()=>{res.redirect('/')})
  .catch((e)=>{
    console.log(e);
    res.redirect('/')
  })
})
module.exports = router;