import React, {Component} from 'react';
import Dropbox from '../components/Dropbox'
import Loader from '../components/Loader.js'
class Home extends Component{
  render(){
    return(
      <div>
        <div className = "container">
        <h2> Welcome to Exam Scheduler</h2>
           <div className = "row">
            <div className="col-md-4">
               <Dropbox/>
               <Loader/>
             </div>
             <div className="col-md-4">
               <Dropbox/>
               <Loader/>
             </div>
             <div className="col-md-4">
               <Dropbox/>
               <Loader/>
             </div>
          </div>
          <div className = "text-center">
            <button type="button" className="btn btn-primary">Generate Output</button>
          </div>
        </div>
      </div>
      );
  }
}

export default Home
