import React, {Component} from 'react';

class About extends Component{
  render(){
    return(
      <main role="main" className="container">
        <div className="row">
          <div className="col-md-9">
            <h1>About Us</h1>
            <p>Exam Scheduler is a tool to create a automated schedule for teacher duties</p>
          </div>
          <div className="col-md-3">
            <div className="content-section">
              <h3>Our Sidebar</h3>
              <p className='text-muted'>You can put any information here you'd like.
                <ul className="list-group">
                  <li className="list-group-item list-group-item-light">Latest Posts</li>
                  <li className="list-group-item list-group-item-light">Announcements</li>
                  <li className="list-group-item list-group-item-light">Calendars</li>
                  <li className="list-group-item list-group-item-light">etc</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default About
