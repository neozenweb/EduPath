import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import * as coursesApi from './coursesApi.js';
import Listcourses from './Listcourses.js';
import Courses from './Courses.js';

 
class App extends Component {
  
   
    
    
    selectProvider(pr)
    {
        var prov=pr.target.getAttribute("data");
        var sub=document.getElementsByName("searchText")[0].value;
        var frm =  document.getElementsByClassName("form-inline")[0];
                 
                this.setState({courses:[], flag:'N', subject:sub, provider:prov});
               
                
           
    }
    
    state={
        
        courses:[],
        flag:'N',
        subject:'',
        provider:''
         
    }
  

//ReactDOM.render(<App />, document.getElementById('root'));
   
 
   render()
{
      if(!this.state.subject || !this.state.provider)
 {
     return(
         
       
      <div className="main-header">  
      <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" style={{fontSize:"xx-large"}} href={"index.html"}>MyEdu</a>
                </div>
                
         
            <form className="form-inline" method="POST" action={this.selectProvider.bind(this)}>
              <div className="form-group">
                
              <div className="navbar-header">
                  <input type="text" name="searchText" className="searchbox" placeholder="Search..."/>
                   <div className="glyphicon glyphicon-search" ></div>
                </div>


         <ul className="nav navbar-nav" name="Providers" >
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href={"#"}>Provider</a>
                         <ul className="dropdown-menu"  style={{fontSize:"large"}}>
                            <li name="udacity" onClick={this.selectProvider.bind(this)} data="udacity">Udacity</li>
                            <li name="edx"onClick={this.selectProvider.bind(this)} data="edx">EdX</li>
                            <li name="coursera" onClick={this.selectProvider.bind(this)} data="coursera">Coursera</li>
                             
                        </ul>
                    </li>
                </ul>
               </div>
              </form>
              </div>
            </nav>
         
         
              <div className="App">
             <h1> MyEdu </h1>
           <span> Carve your own path by learning.</span>
        
        <p>
            “I have never let schooling interfere with my education." -Mark Twain
          </p>
        
                   
      
      </div>
     
      
       
     </div>    
     
     );
}
    
else
      {
          
      return(
       <Courses courses={this.state.courses} flag={this.state.flag} subject={this.state.subject} provider={this.state.provider}/>
  
                );

        }

}
   

}

export default App;
