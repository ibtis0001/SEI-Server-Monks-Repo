const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Post = require('../model/Post')
const Acuser = require('../model/Acuser')


// get spc post //
// get all post //
//_____________//
router.get('/admin', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ msg: err })
  }
});
router.get('/users', (req, res) => {
  res.send('posts user')
})
//_____________________//
// sub post //
//______________//
router.post('/admin/add', async (req, res) => {
  const post = new Post({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    pass: req.body.pass,
    isSuper: true,
    imgLink: req.body.imgLink,
    title: req.body.title,
    desc: req.body.desc,
    quantityS: req.body.quantityS,
    cquantityM: req.body.cquantityM,
    quantityL: req.body.quantityL,
    price: req.body.price
  })
  res.json({ "msg": "oki" })

  const savepost = await post.save();
  res.redirect('http://localhost:3455/')

});
//___________________//
// accept User Req //
router.post('/admin/adc', async (req, res) => {
  const post = new Acuser({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    pass: req.body.pass,
    isSuper: true,
    imgLink: req.body.imgLink,
    title: req.body.title,
    desc: req.body.desc,
    quantityS: req.body.quantityS,
    cquantityM: req.body.cquantityM,
    quantityL: req.body.quantityL,
    price: req.body.price
  })
  res.json({ "msg": "oki" })
  const savepost = await post.save()


});
//----------------//
// see all accepted users //
router.get('/admin/adc', async (req, res) => {
  try {
    const posts = await Acuser.find();
    res.json(posts);
  } catch (err) {
    res.json({ msg: err })
  }
});
// --------------- //
router.get('/admin/adc/:id', async (req, res) => {
  try {
    const posts = await Acuser.find({ email: req.params.id });
    res.json(posts);
  } catch (err) {
    res.json({ msg: err })
  }
});
// delet post //
router.delete('/admin/delete/:id', async (req, res) => {
  const RemovePost = await Post.remove({ _id: req.params.id });
  res.redirect('http://localhost:3000/')
});
//____________//
// update //
router.patch('/admin/update/:email', async (req, res) => {
  const updatepost = await Acuser.updateOne({ email: req.params.email },
    { $set: { islogedin: true } }
  );
  res.json(updatepost)
})
module.exports = router;
