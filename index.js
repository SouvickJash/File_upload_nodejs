//imdex page
const express=require('express')
const app=express();
const mongoose=require('mongoose')
const ejs=require('ejs')

// const flash = require('connect-flash');
// const session=require('express-session')
const bodyParser=require('body-parser')
// const cookieParser=require('cookie-parser')

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

// Set Cookie Parser, sessions and flash

// app.use(cookieParser('NotSoSecret'));
// app.use(session({
//   secret : 'something',
//   cookie: { maxAge: 60000 },
//   resave: true,
//   saveUninitialized: true
// }));
// app.use(flash());

app.set('view engine','ejs')
app.set('views','views')
app.use('/Uploads',express.static('Uploads')) //upload images

const apiRouter=require('./Route/apiRoute')
app.use('/api',apiRouter)

const webRouter=require('./Route/webRoute')
app.use(webRouter)

const PORT= 1234
const dbDriver="mongodb+srv://souvickjash9836:hahMNOgVnI9ioYbh@cluster0.3kynmom.mongodb.net/student"
mongoose.connect(dbDriver,{useNewUrlParser:true,useUnifiedTopology:true})
.then(result=>{

    app.listen(PORT,()=>{
        console.log(`server running port : http://localhost:${PORT}`);
        console.log(`Database connection successfully`);
    })
}).catch(error=>{
    console.log(error);
})
