const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

const serviceURL = 'http://172.17.0.1:4000';
const serviceURL2 = 'http://app2-api:8081';

app.get('/', async(req, res) => {
	try {
		const result = await axios.get(serviceURL).then((d) => d ? d.data : {});
    	res.json(result);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

app.post('/', async(req, res) => {
	await axios.post(serviceURL, { title: req.body.title, amount: req.body.amount || 100 });
	res.sendStatus(201);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
