import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const port = 3000;
const API_URL = "https://bhagavad-gita3.p.rapidapi.com/v2/";
const app = express();
//Headers for the authoriazation 
const Header = {
  headers: {
    "x-rapidapi-key": `${process.env.API_KEY}`,
    "x-rapidapi-host": `${process.env.HOST}`,
  },
};



app.use(express.static("public"));

//Routes for the backend

app.get("/",(req,res)=>{
  res.render("index.ejs")
})

//Route for getting all the chapters


app.get("/route1",async(res,req)=>{
  try {
    const response=await axios.get(`${API_URL}chapters`,Header)
    console.log(response.data[0]);
    
  } catch (error) {
    console.log(error.message)
  }
  
})


//Route for getting the particular chapter

app.get("/route2",async(res,req)=>{
  try {
    
  } catch (error) {
    
  }

})

// Route for getting all verses for the particular chapter
app.get("/route3",async(res,req)=>{
  try {
    
  } catch (error) {
    
  }

})

// Route for getting a particular verse
app.get("/route4",async(res,req)=>{
  try {
    
  } catch (error) {
    
  }

})


app.listen(port, console.log("Server stared on 3000"));
