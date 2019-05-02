import React, {Component} from 'react';

import TemplatePannel from '../components/right_pannel/templates.js'

class Help extends Component{
  render(){
    return(
      <main role="main" className="container">
        <div className="row">
          <div className="col-md-9">
            <p>Exam Scheduler is a tool to create a automated schedule for teacher duties</p>
          </div>
          <div className="col-md-3">
            <TemplatePannel/>
          </div>
        </div>
      </main>
    );
  }
}
export default Help;
