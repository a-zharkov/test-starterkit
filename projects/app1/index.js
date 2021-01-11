const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const headers = req.header('Subdomain');
    res.send(`Hello World from app1!, subdomain: ${headers}, length: ${headers.length}`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
