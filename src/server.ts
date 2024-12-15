import express, {Request, Response} from 'express';
import 'dotenv/config'
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response)=>{
    res.send('App is working...');
})

app.listen(PORT, ()=>{
    console.log(`App is started on PORT ${PORT}`);
})

