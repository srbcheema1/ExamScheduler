import React, {Component, createRef} from 'react';
import Dropbox from '../components/Dropbox.js'
import {Modal, Button} from 'react-bootstrap'
import './Home.css'

class Home extends Component{
  constructor(props) {
    super(props);
    this.initialstate = {
      teachers_list:false,
      room_list:false,
      schedule_list:false,
      work_ratio:false,
      seed:5,
      message:null,
      showModel:false,
    };
    this.state = this.initialstate;
    this.teacher_list_ref = createRef();
    this.schedule_list_ref = createRef();
    this.room_list_ref = createRef();
    this.work_ratio_ref = createRef();
  }

  onFileChanged =(file,val,extra)=>{
    this.setState({...{[file]:val}, ...extra});
  }

  handleClose = () => {
    this.setState({showModel:false});
  }

  Reset = () => {
    this.setState({...this.initialstate},()=>{
      console.log('reset');
      console.log(this.state);
    });
    this.teacher_list_ref.current.Reset();
    this.schedule_list_ref.current.Reset();
    this.room_list_ref.current.Reset() ;
    this.work_ratio_ref.current.Reset();
  }

  handleCloseReset = () => {
    this.Reset();
  }

  onClick = (e) => {
    var data = new FormData();
    data.append('teachers_list', this.state.teachers_list);
    data.append('schedule_list', this.state.schedule_list);
    data.append('room_list', this.state.room_list);
    data.append('work_ratio', this.state.work_ratio);
    data.append('seed', this.state.seed);
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
          this.setState({message:null});
          setTimeout(() => {
            window.location.href = "http://localhost:5000/" + "download/" + success['file']
          }, 1);
        }
        else {
          var message = success['message'];
          this.setState({message:message,showModel:true});
          message = message.replace(/\n/g, "<br />");
          message += "<br/><a href='/About'>Read the instructions</a><br/>";
          document.getElementById("modal_desc").innerHTML = message;
        }
      }
    ).catch(
      error => console.log(error) // Handle the error response object
    )
  }

  render(){
    let advDisabled = !(this.state.teachers_list&&this.state.room_list&&this.state.schedule_list&&this.state.work_ratio);
    let buttonDisabled = advDisabled;
    return(
      <div className = "container">
        <h2 style={{padding:'10px'}}> Welcome to Exam Scheduler</h2>
        <div className = "row scheduler-box">
          <div className = "col-md-9 scheduler-box">
            <div className = "row" style={{minHeight:'150px'}}>
              <div className="col-md-6">
                <Dropbox filename="teachers_list"
                  ref={this.teacher_list_ref}
                  onFileChanged={(val,extra)=>this.onFileChanged("teachers_list",val,extra)}
                />
                </div>
              <div className="col-md-6">
                <Dropbox filename="schedule_list"
                  ref={this.schedule_list_ref}
                  onFileChanged={(val,extra)=>this.onFileChanged("schedule_list",val,extra)}
                />
              </div>
            </div>
            <div className = "row" style={{minHeight:'150px'}}>
              <div className="col-md-6">
                <Dropbox filename="room_list"
                  ref={this.room_list_ref}
                  onFileChanged={(val,extra)=>this.onFileChanged("room_list",val,extra)}
                />
              </div>
              <div className="col-md-6">
                <Dropbox filename="work_ratio"
                  ref={this.work_ratio_ref}
                  onFileChanged={(val,extra)=>this.onFileChanged("work_ratio",val,extra)}
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
          </div>{/*scheduler-box ends*/}
          <div className="col-md-3 scheduler-box">
            <div className="content-section">
              <ul className="list-group">
                <li className="list-group-item list-group-item-light srb-pane-title text-center">Templates</li>
                <li className="list-group-item list-group-item-light">
                  <a href="https://docs.google.com/spreadsheets/d/15bAOhsQVrBLxnEd4DI-PgnyDpE14taAN_ydTV9vniWY/edit?usp=sharing"
                  target="_blank" rel="noreferrer noopener">
                    <i className="fas fa-user-tie" style={{letterSpacing:'10px'}}></i>
                    Teachers List
                  </a>
                </li>
                <li className="list-group-item list-group-item-light">
                  <a href="https://docs.google.com/spreadsheets/d/1yyfRZFn-ZVB4889vxZ8bu1Tjj6p-qdMqxtfZfdXa554/edit?usp=sharing"
                  target="_blank" rel="noreferrer noopener">
                    <i className="fas fa-calendar-alt" style={{letterSpacing:'10px'}}></i>
                    Schedule List
                  </a>
                </li>
                <li className="list-group-item list-group-item-light">
                  <a href="https://docs.google.com/spreadsheets/d/1caJK62qwDkqrdeZ8rUnaGs5JulMyxCFeaYhk7TrnsYc/edit?usp=sharing"
                  target="_blank" rel="noreferrer noopener">
                    <i className="fas fa-school" style={{letterSpacing:'10px',fontSize:'12px'}}></i>
                    Room List
                  </a>
                </li>
                <li className="list-group-item list-group-item-light">
                  <a href = "https://docs.google.com/spreadsheets/d/139LZkE2maa5xi97H0Z4hxtvCVocsYLPAPH38n6RblLQ/edit?usp=sharing"
                  target="_blank" rel="noreferrer noopener">
                    <i className="fas fa-cogs" style={{letterSpacing:'10px',fontSize:'12px'}}></i>
                    Work Ratio
                  </a>
                </li>
                <li className="list-group-item list-group-item-light">
                  <a href="https://docs.google.com/spreadsheets/d/1kxMy05dvqbor3EW1vEGFoNjI8n3haLKzu7OVdrbX-Dw/edit?usp=sharing"
                  target="_blank" rel="noreferrer noopener">
                    <i className="fas fa-poll" style={{letterSpacing:'10px'}}></i>
                    Final Output
                  </a>
                </li>
              </ul>
            </div>
          </div> {/**side bar ends */}
        </div> {/*row ends*/}
        <Modal show={this.state.showModel} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Error! Incomplete Data</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modal_desc"></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseReset}>
              Reset
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Continue
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Home;
