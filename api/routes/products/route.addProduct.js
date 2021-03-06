const express = require('express');
const router = express.Router();
const connection = require('../../database/index');

router.post('/products/add', (req, res) => {
	const { name, price, img_url, rating } = req.body;
	connection.query('INSERT INTO products VALUES(?, ?, ?, ?, ?)', [null, name, price, img_url, rating], (err, results, fields) => {
		if (!err) {
			res.json({
				res: 'record saved successfully',
			});
		} else {
			console.log(err);
		}
	});
});

module.exports = router;
