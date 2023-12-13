const epress = require('express');
const app = epress();
const tasks = require('./routes/tasks')

//middleware
app.use(express.json())



//routes
app.get('/hello',(req,res) =>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks',tasks)






const port  = 3000
app.listen(port,console.log(`server is listning on port ${port}....`))
