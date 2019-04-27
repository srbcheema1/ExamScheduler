import React, {Component} from 'react';
import Dropbox from '../components/Dropbox.js'

class Home extends Component{
  state={
    teachers_list:false,
    room_list:false,
    schdeule_list:false,
  }
  onFileChanged =(file,val)=>{
    this.setState({
      [file]:val
    })
  }
  onClick = (e) => {
    e.preventdefault()
  }

  render(){
    let buttonDisabled = !(this.state.teachers_list&&this.state.room_list&&this.state.schedule_list);
    return(
      <div className = "container">
        <h2> Welcome to Exam Scheduler</h2>
        <div className = "row" style={{minHeight:'150px'}}>
          <div className="col-md-4">
            <Dropbox filename="teachers_list"
              onFileChanged={(val)=>this.onFileChanged("teachers_list",val)}
            />
          </div>
          <div className="col-md-4">
            <Dropbox filename="schedule_list"
              onFileChanged={(val)=>this.onFileChanged("schedule_list",val)}
            />
          </div>
          <div className="col-md-4">
            <Dropbox filename="room_list"
              onFileChanged={(val)=>this.onFileChanged("room_list",val)}
            />
          </div>
        </div>
        
        <div className = "text-center">
          <button type="button" disabled={buttonDisabled}
           className="btn btn-primary"
           onClick={this.onClick}
           style={{marginTop:'30px'}}>
           Generate Output
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
