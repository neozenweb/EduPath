const express = require('express');
const app = express();
const port = 5000;
const fetch = require('node-fetch');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var config = require("./config.js");

let token = "";
let arrdata=[];

let client_id = config.APIClientID;
let client_secret = config.APIClientSecret;

app.listen(port, (err) => {
  if (err) { console.log(err); };
  console.log('Listening on port ' + port);
});



app.get('/edxData', (req, res) => {
    const requestBody = req.body;
      fetch("https://api.edx.org/oauth2/v1/access_token", {
                  body: "grant_type=client_credentials&client_id="+client_id+"&client_secret="+client_secret+"&token_type=jwt",
                 headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                      },
                  method: "POST"
                }).then(res=>res.json())
           .then(data=>{
        
        token="JWT "+data.access_token;
     
        fetch("https://api.edx.org/catalog/v1/catalogs/415/courses", {
                     method:"GET",
                     mode:"no-cors",
                     headers: {
                        "Authorization": token,
                         
                      }
            })
                  .then(r=>r.json())
                   .then(data=>{res.send(data.results);})
                   .catch(err=>console.log("ERROR GETTING DATA "+err));

    
    })
     .catch(err=>{console.log("error "+err);
        res.redirect('/error');
      });
  
});

app.get('/courseraData', (req, res) => {
    const requestBody = req.body;
    fetch("https://api.coursera.org/api/courses.v1", {
        method: "GET", 
        mode: "cors", 
       
        headers: {
                   
                 "Allow-Control-Allow-Origin":"http://localhost:3000"
               
                } 
            }
         
       
         )
      .then(res =>res.json())
       .then(data =>{console.log(data.elements);res.send(data.elements);})
     .catch(err=>{console.log("error "+err);
        res.redirect('/error');
                 });
  
});


app.get('/udacityData', (req, res) => {
    const requestBody = req.body;
    fetch("https://www.udacity.com/public-api/v0/courses", {
        method: "GET",  
        mode: "cors",  
           headers: {
            "Content-Type": "application/json",
              "Allow-Control-Allow-Origin":"http://localhost:3000"
        }  
})
      
        
      .then(res =>res.json())
       .then(data =>{console.log(data.courses);res.send(data.courses);})
     .catch(err=>{console.log("error "+err);
        res.redirect('/error');
                 });
  
});