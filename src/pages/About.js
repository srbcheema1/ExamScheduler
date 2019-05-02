import React, {Component} from 'react';

class About extends Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <p>Exam Scheduler is a tool to create a automated schedule for teacher duties</p>
          </div>
          <div className="col-md-3">
            <div className="content-section">
              <ul className="list-group">
                <li className="list-group-item list-group-item-light">Latest Posts</li>
                <li className="list-group-item list-group-item-light">Announcements</li>
                <li className="list-group-item list-group-item-light">Calendars</li>
                <li className="list-group-item list-group-item-light">etc</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About
