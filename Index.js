const express = require('express');
const hbs = require('hbs');

var app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.get('/', (req, res) => {
	//res.send('<h1>Hello Express!</h1>');
	res.render('index.hbs', {
		greeting: 'Welcome!',
		pageTitle: 'Home Page',
		name: 'Tina',
		likes: [
			'Cooking',
			'Baking',
			'Traveling',
			'Watching shows'
		]
	});
});


app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});