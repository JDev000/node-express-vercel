import express from 'express'

const app = express()

app.get('/', (req,res)=>{
    res.send("express vercel app response")
})

app.listen(5000, ()=>{
    console.log('app is running...')
})