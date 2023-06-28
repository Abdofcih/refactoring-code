import express , {Express,  Request, Response} from "express"
import 'dotenv/config'
import useRouters from "./app.router";

const port = 8080;

const app:Express = express()

app.use(express.json())
app.get("/",(req:Request,res:Response)=>{
    res.send({message:"App works fine"})
})
useRouters(app)
app.listen(port,()=>{
    console.log("App works fine on port",port);
    
})