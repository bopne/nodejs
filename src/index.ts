import express from 'express';  
import usersRouter from './routes/users.router';
import databaseService from './services/database.services'
import homeRoutes from "./routes/homeRoutes";
import path from 'path';
const app = express();  
const port = 3000; 
app.use(express.static(path.join(__dirname, "./public")));
app.use("/", homeRoutes); // Đăng ký route home

app.use(express.json()) 
app.use('/users', usersRouter);  
databaseService.connect();

app.listen(port, () => {  
    console.log(`Example app listening on port ${port}`);  
});  

