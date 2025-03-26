
import { MongoClient,Db } from 'mongodb';
import { env } from 'process';
import dotenv from 'dotenv';
dotenv.config()
console.log(process.env.DB_USERNAME)
const uri = "mongodb+srv://1150080138:12345@twitter.mfb42.mongodb.net/?retryWrites=true&w=majority&appName=Twitter";


class DatabaseService{
  private client : MongoClient
  private db : Db
  constructor(){
    this.client = new MongoClient(uri)
    this.db= this.client.db(process.env.DB_NAME) 
    async function run() {
    
  }

  }

  async connect() {  
    
    console.log("đây là connec ");
    try { 
      
      // Send a ping to confirm a successful connection  
      await this.db.command({ ping: 1 })
      // await this.client.connect();
      console.log('Pinged your dedeployment. You successfully connected to MongoDB!')  
    }catch(err){
        console.log("lỗi rồi tr",err );
    }finally {    
    console.log("kết thúc connect ");

       // Ensures that the client will close when you finish/error  
      // await this.client.close()  
    }  
  }  
}

// Tạo object từ class DatabaseService  
const databaseService = new DatabaseService()  
export default databaseService  
