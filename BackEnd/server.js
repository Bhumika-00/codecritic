require('dotenv').config()


const app = require('./src/app')
const port = 4000;  
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


