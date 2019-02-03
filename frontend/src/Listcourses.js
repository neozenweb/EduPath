import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './Listcourses.css';
import * as coursesApi from './coursesApi.js';

 
class Listcourses extends Component {
    
    
    state ={
        courses: this.props.courses,
        flag: this.props.flag,
        subject: this.props.subject,
        provider: this.props.provider
    }
  
listTitle=(name,home,ind)=>{
  
    return(<Para key={ind} home={home} props={name}> <a href={home}>{name} </a>  </Para>);
    
              
   //  this.props.courses.map(ar=>return(<Para> {ar.title} </Para>));
    
}

 goHome(){
          this.state.flag="N";
 }

    

render()
{
       
        //console.log(this.props.courses);
  if(this.state.courses && this.state.flag==='Y')
  {
      
      return(
          <div>
          <List>
              <h4> 
          
        <span className="glyphicon glyphicon-home" onClick={this.goHome.bind(this)}>   Home </span>
          <p style={{'padding-left':'10%'}}> Courses from {this.state.provider} </p></h4>
      
          {
              
              
              this.props.courses.map((ar,ind)=>{
          if(this.props.provider=="udacity")
          return this.listTitle(ar.title,ar.homepage,ind);
          if(this.props.provider=="coursera")
          return this.listTitle(ar.name,"https://www.coursera.org/learn/"+ar.slug,ind);
           if(this.props.provider=="edx")
               return this.listTitle(ar.title,"https://www.edx.org/course/"+ar.title.split(" ").join("-"));
          
      })}
        </List>
    </div>
    );       
     
  }
      
    else
        {
            return(<App courses={[]} flag={'N'} subject={null} provider={null} />);
          
        }


           }
}

const List =(props)=><div className="reportdata">{props.children}</div>

const Para =(props,home,key)=> <p className="pclass" id={key}><a href={home.children}> {props.children}</a></p>

export default Listcourses;