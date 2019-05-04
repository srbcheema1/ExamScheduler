import React from 'react';
import done_gif from './done.gif'
import loading_gif from './loading.gif'
import './Loader.css'

const Loader = (props) =>{
  if(props.empty) {
    return (
      <div className="Loader container">
        <h3>{props.filename}</h3>
        <p>Drag 'n' drop your file here</p>
      </div>
    )
  }
  if(props.wrong) {
    return (
      <div className="Loader container">
        <span className=" fas fa-times" style={{fontSize:'80px', color:'red'}}/>
      </div>
    )
  }
  if(props.verified){
    return(
      <div className="Loader container">
        <img
          src={done_gif}
          height="50" alt="verified"
        />
      </div>
    )
  }
  if(props.verfying) {
    return(
      <div className="Loader container">
        <img
          src={loading_gif}
          height="70" alt="verifying"
       />
      </div>
    )
  }
  return <h3>Wrong parameter</h3>
}

export default Loader;
