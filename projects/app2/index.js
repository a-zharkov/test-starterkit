const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

const schema = new mongoose.Schema({}, { strict: false });
const Post = mongoose.model('Post', schema);

app.get('/', async(req, res) => {
    const posts = await Post.find({}).lean().exec();
    res.json(posts);
})

app.post('/', async(req, res) => {
    await Post.create(req.body);
    res.send('Created!')
})

app.listen(port, async () => {
    await mongoose.connect('mongodb://mongodb:27017/klickly-test');
    console.log(`Example app listening at http://localhost:${port}`)
})
