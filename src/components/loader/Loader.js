import React from 'react';
import './Loader.css'

const Loader = (props) =>{
  //console.log(props)
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
          src="https://thumbs.gfycat.com/ShyCautiousAfricanpiedkingfisher-max-1mb.gif"
          height="50" alt="veri"
        />
      </div>
    )
  }
  if(props.verfying) {
    return(
      <div className="Loader container">
        <img 
          src="http://chittagongit.com/download/49938"
          height="70" alt="veri"
       />
      </div>
    )
  }
  return <h3>Wrong parameter</h3>
}

export default Loader;
