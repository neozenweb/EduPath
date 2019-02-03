import React, { Component } from 'react';
import './courses.css';
import ReactDOM from 'react-dom';
import * as coursesApi from './coursesApi.js';
import Listcourses from './Listcourses';
 
class Courses extends Component {
   
    
   
    state={
            courses:this.props.courses,
             flag:this.props.flag,
             subject:this.props.subject,
             provider:this.props.provider
        }
   
    
//ReactDOM.render(<App />, document.getElementById('root'));
   

   

  render() {
      
         let filteredData=[];
 
      
      
      if(this.props.provider === "edx")
        {
           
     fetch("/edxData")
                .then(res=>res.json())
                .then(data=>{
         
         console.log(data);
                   filteredData = data.filter(dt=>
                     (dt.title.indexOf(this.props.subject) >=0)
                     || (dt.short_description.indexOf(this.props.subject) >=0)
                      || (dt.full_description.indexOf(this.props.subject) >=0));
                 
              
              
         this.setState({courses:filteredData, flag:'Y', subject:this.props.subject, provider:this.props.provider})
             
     })
                .catch(err=>console.log("ERROR GETTING DATA "+err));
        }
        
      
       if(this.props.provider === "coursera")
        {
           
     fetch("/courseraData")
                .then(res=>res.json())
                .then(data=>{
         
           
          filteredData = data.filter(dt=> dt.name.indexOf(this.props.subject) >=0);
                 
              
         this.setState({courses:filteredData, flag:'Y', subject:this.props.subject, provider:this.props.provider})
             
     })
                .catch(err=>console.log("ERROR GETTING DATA "+err));
        }
      
      
      
      
     if(this.props.provider === "udacity")
    
        {
                fetch("/udacityData")
                .then(res=>res.json())
                .then(data=>{
                    
                     filteredData = data.filter(dt=>
                     (dt.title.indexOf(this.props.subject) >=0)
                     || (dt.expected_learning.indexOf(this.props.subject) >=0)
                      || (dt.syllabus.indexOf(this.props.subject) >=0));
                 
         this.setState({courses:filteredData, flag:'Y', subject:this.props.subject, provider:this.props.provider})
             
     })
                .catch(err=>console.log("ERROR GETTING DATA "+err));     }
   
      
     if(this.state.flag == "Y")
        {
            
     return(
        
       <Listcourses courses={this.state.courses} flag={this.state.flag} subject={this.state.subject} provider={this.state.provider}/>
     );
      }
      else{
          return (<div> Waiting for data </div>);
      }
  }

 

}


export default Courses;
