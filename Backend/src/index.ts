import express from "express";
import cors from "cors";

import {ENV} from "./config/env"
import { clerkMiddleware } from '@clerk/express'

const app = express()
app.use(cors({origin :ENV.FRONTEND_URL}))
app.use(clerkMiddleware()) // auth obj will be attached  to the request
app.use(express.json())//parses JSON request bodies
app.use(express.urlencoded({extended:true})) // parses form data (like HTML forms)

app.get('/',(req,res)=>{
    res.json({
        success:"Hello world"
    })
})

app.listen(ENV.PORT,()=>console.log("The server is running up on port:",ENV.PORT));

