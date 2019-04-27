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
    var data = new FormData();
    data.append('teachers_list', this.state.teachers_list);
    data.append('schedule_list', this.state.schedule_list);
    data.append('room_list', this.state.room_list);
    data.append('user', 'srb');
    var url = "http://localhost:5000/"+"output"
    fetch(url, { // Your POST endpoint
      method: 'POST',
      body: data // This is your fil[e object
    }).then(
      response => response.json()
    ).then(
      success => {
        console.log(success)
        if(success['done']){
          setTimeout(() => {
            window.location.href = "http://localhost:5000/" + "download/" + success['file']
          }, 1);
        }
      }
    ).catch(
      error => console.log(error) // Handle the error response object
    )
  }

  render(){
    let buttonDisabled = !(this.state.teachers_list&&this.state.room_list&&this.state.schedule_list);
    return(
      <div className = "container">
        <h2 style={{padding:'10px'}}> Welcome to Exam Scheduler</h2>
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
