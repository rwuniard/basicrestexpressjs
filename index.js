const express = require('express');
const app = express();

// Set the REST API 
app.use('/api/basicrest', require('./routes/api/basicrest'));

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
