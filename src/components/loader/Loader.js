import React from 'react';
import './Loader.css'
const Loader = (props) =>{
  return(
    <div className="Loader container">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader;
