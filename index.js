const connection =require('./connection')
const express = require ('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json())

app.get('/mywork/:id',(req,res)=>{
    connection.query('SELECT * FROM mywork WHERE id=?',[req.params.id],(err,rows)=>{
        if(err){
            console.log(err)
        }else {
            res.send(rows)

        }
    })
})

app.delete('/mywork/:id',(req,res)=>{
    connection.query('DELETE FROM mywork WHERE id=?',[req.params.id],(err,rows)=>{
        if(err){
            console.log(err)
        }else {
            res.send(rows)

        }
    })
})

app.post('/mywork/',(req,res)=>{
     var mywork = req.body
     var myworkData =[mywork.title,mywork.task]
    connection.query('INSERT INTO mywork(title,task) values(?)',[myworkData],(err,rows)=>{
        if(err){
            console.log(err)
        }else {
            res.send(rows)

        }
    })
})



app.patch('/mywork',(req,res)=>{
    var mywork = req.body
   connection.query('UPDATA  mywork SET ? WHERE id='+mywork.id,[mywork],(err,rows)=>{
       if(err){
           console.log(err)
       }else {
           res.send(rows)

       }
   })
})


app.put('/mywork',(req,res)=>{
    var mywork = req.body
   connection.query('UPDATE  mywork SET ? WHERE id='+mywork.id,[mywork],(err,rows)=>{
       if(err){
           console.log(err)
       }else {
            if(rows.affectedRows==0){
                var myworkData =[mywork.name,mywork.salary]
                connection.query('INSERT INTO mywork(title,task) values(?)',[myworkData],(err,rows)=>{
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





app.listen(3000,()=>console.log('Express server is running on port 3000'))




