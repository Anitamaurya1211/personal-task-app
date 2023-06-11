const { connect } = require("../config/connection")
 const myTaskRoutes = async(app) => {
    const connection = await connect()
    app.get('/mywork/:id',(req,res)=>{
        connection.query('SELECT * FROM tasks WHERE id=?',[req.params.id],(err,rows)=>{
            if(err){
                console.log(err)
            }else {
                res.send(rows)
    
            }
        })
        connection.end()
    })
    
    app.get('/mywork', async (req,res)=>{
        const connection = await connect()
        connection.query('SELECT * FROM tasks;',(err,rows)=>{
            if(err){
                console.log(err)
            }else {
                res.send(rows)
    
            }
        })
        connection.end()
    }) 
    
    app.delete('/mywork/:id', async(req,res)=>{
        const connection = await connect()
        connection.query('DELETE FROM tasks WHERE id=?',[req.params.id],(err,rows)=>{
            if(err){
                console.log(err)
            }else {
                res.send(rows)
    
            }
        })
    })
    
    app.post('/mywork/',async(req,res)=>{
        const connection = await connect()
         var mywork = req.body
         var myworkData =[mywork.title,mywork.task]
         connection.query('INSERT INTO tasks(title,task) values(?)',[myworkData],(err,rows)=>{
            if(err){
                console.log(err)
            }else {
                res.send(rows)
    
            }
        })
    })
    
    app.patch('/mywork',async(req,res)=>{
        const connection = await connect()
        var mywork = req.body
        connection.query('UPDATA  tasks SET ? WHERE id='+mywork.id,[mywork],(err,rows)=>{
           if(err){
               console.log(err)
           }else {
               res.send(rows)
    
           }
       })
    })
    
    app.put('/mywork', async(req,res)=>{
        const connection = await connect()
        var mywork = req.body
        connection.query('UPDATE  tasks SET ? WHERE id='+mywork.id,[mywork],(err,rows)=>{
           if(err){
               console.log(err)
           }else {
                if(rows.affectedRows==0){
                    var myworkData =[mywork.name,mywork.salary]
                    connection.query('INSERT INTO tasks(title,task) values(?)',[myworkData],(err,rows)=>{
                        if(err){
                            console.log(err)
                        }else {
                            res.send(rows)
                        }
                    })
                }else{
               res.send(rows)
                }
    
           }
       })
    })

}
module.exports={myTaskRoutes};










