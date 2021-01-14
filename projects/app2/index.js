const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

const schema = new mongoose.Schema({}, { strict: false });
const Post = mongoose.model('Post', schema);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async(req, res) => {
    const posts = await Post.find({}).lean().exec();
    res.json(posts);
})

app.post('/', async(req, res) => {
    await Post.create(req.body);
    res.send('Created!')
})

app.listen(port, async () => {
    await mongoose.connect('mongodb://localnode:27018/klickly-test', { useNewUrlParser: true });
    console.log(`Example app listening at http://localhost:${port}`)
})
