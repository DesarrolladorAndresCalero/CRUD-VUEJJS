import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

//middlewares 
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes
app.use('/', require('./routes/auth.routes'))


//settings
app.set('port' , process.env.PORT || 3000)

app.listen(app.get('port'), ()=> {
    console.log('Server on port ' + app.get('port') )
})