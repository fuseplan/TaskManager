const getAllTasks= (req,res)=>{
    res.send(all items)
}


const createTask=(req,res) =>{
    res.send(' Create Task')
}
const getTask=(req,res) =>{
    res.send(' get single task')
} 
const updateTask=(req,res) =>{
    res.send(' update task')
}
const deleteTask=(req,res) =>{
    res.send(' Delete Task')
}

module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}