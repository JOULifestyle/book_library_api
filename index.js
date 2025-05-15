const express = require('express');
const app = express();
const book_routes = require('./routes/book_routes');

app.use(express.json());
app.use('/api/books', book_routes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
