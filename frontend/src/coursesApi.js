const apiudacity = "https://www.udacity.com/public-api/v0/courses";
//const apiedx = "https://courses.edx.org/api/courses/v1/courses";
//const apiedx = "https://api.edx.org/catalog/v1/catalogs/415/courses";
const apiedx = "https://api.edx.org/catalog/v1/catalogs/415/courses";
//const apicoursera = "https://api.coursera.org/api/courses.v1?start=0&limit=2150&includes=instructorIds,partnerIds,specializations,s12nlds,v1Details,v2Details&fields=instructorIds,partnerIds,specializations,s12nlds,description";
const apicoursera = "https://api.coursera.org/api/courses.v1";
// Generate a unique token for storing your bookshelf data on the backend server.


const passvalsudacity ={
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
            "Allow-Control-Allow-Origin":"*"
        } // body data type must match "Content-Type" header
};
const passvalscoursera ={
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        //cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: "same-origin", // include, *same-origin, omit
        headers: {
                   
                 "Allow-Control-Allow-Origin":"http://localhost:3000"
               
        } // body data type must match "Content-Type" header
};



export const getToken =()=>{
    
    
   return fetch("https://api.edx.org/oauth2/v1/access_token", {
                  body: "grant_type=client_credentials&client_id=0npD4Bk9le5vXQqQhsJtm8nmF5ZAUJURCW6WGhVZ&client_secret=gSjE3iVk52h6GCYgnc4Arienr9Bf5v9YrQ9aA7ptSq9gAbRQNtTa1BMoJFUE1epQlMIKdcwRp4PKJLTmWQf4kRXVxbLba5cXju6e9WEuOy0GtBBdDUff90cf2Hh6ZjSY&token_type=jwt",
                 headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                      },
                  method: "POST"
                }).then(res=>res.json())
           .then(data=>data.access_token).catch(err=>console.log("ERROR "+err));
       
     
  }
    
    
/*
export const getEdxData=(subject,token)=>{
     
   
       console.log("Token is "+token);
          return fetch("https://api.edx.org/catalog/v1/catalogs", {
                     method:"GET",
                     mode:"no-cors",
                     headers: {
                        "Authorization": "JWT "+token,
                        "Access-Control-Allow-Origin":"http://127.0.0.1:3000"
                      }
            })
                  .then(r=>r.json())
                   .then(res=>console.log("SUCCESS "+res.count))
                   .catch(err=>console.log("ERROR GETTING DATA "+err));
               
}
*/

               
  export const getEdxData=()=>{
     
   
          return fetch("/edxData")
                .then(res=>res.json())
                .then(data=>this.setState({courses:data, flag:'Y', subject:this.props.subject, provider:this.props.provider}))
                   .catch(err=>console.log("ERROR GETTING DATA "+err));
 
               
}           



export const getData = (subject,provider) =>{
    
  if(provider=="udacity")
  {
      
     
      return fetch(`${apiudacity}`, {passvalsudacity})
      .then(res =>res.json())
       .then(data=>data.courses.filter(dt=>(dt.short_summary.toLowerCase().indexOf(subject)!= -1) ||(dt.title.toLowerCase().indexOf(subject)!= -1)||(dt.expected_learning.toLowerCase().indexOf(subject)!= -1)|| (dt.summary.toLowerCase().indexOf(subject)!= -1)))
        
  }
   
    if(provider=="coursera")
  {
     return fetch(`${apicoursera}`, {passvalscoursera})
      .then(res =>res.json())
       .then(data =>data.elements.filter(dt=>(dt.name.toLowerCase().indexOf(subject)!= -1)))
  }
}