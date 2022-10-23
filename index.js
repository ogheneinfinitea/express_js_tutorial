const express =require('express');

const app =express();


app.get('/', (req, res)=> {
    res.send('test');

}

);
const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log('server started on port ${PORT}'));