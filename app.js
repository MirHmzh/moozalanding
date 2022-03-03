const express = require('express');
const app = express();

app.use('/', express.static('public'));
app.use('/about', express.static('public/about.html'));
app.use('/layanan', (req, res) => res.send('Coming soon!'));
app.use('/blog', (req, res) => res.send('Coming soon!'));

app.listen(3000, () => console.log('Listen on port 3000') )