import React, { Component, useMemo } from 'react'
import Dropzone from 'react-dropzone'
import Loader from './loader/Loader.js'

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',
  borderWidth: 2,
  borderRadius: 2,
  minHeight:'130px',
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

class Dropbox extends Component {
  constructor(props){
    super(props);
    this.state = {
      file:null,
      task:'empty'
    };
  }

  onDropFile=(acceptedFiles)=>{
    this.setState({file:acceptedFiles[0],task:'verfying'})
    var data = new FormData();
    data.append('file', acceptedFiles[0]);
    data.append('user', 'srb');
    var url = "http://localhost:5000/"+{
      "teachers_list":"rest",
      "schedule_list":"rest",
      "room_list":"rest"
    }[this.props.filename]
    fetch(url, { // Your POST endpoint
      method: 'POST',
      body: data // This is your fil[e object
    }).then(
      response => response.json() // if the response is a JSON object
    ).then(
      success => {
        console.log(success) // Handle the success response object
        if(success['done']) {
          this.setState({file:acceptedFiles[0],task:'verified'})
          this.props.onFileChanged(success['file'])
        } else {
          this.props.onFileChanged(false)
          this.setState({file:acceptedFiles[0],task:'wrong'})
        }
      }
    ).catch(
      error => console.log(error) // Handle the error response object
    );
  }
  render() {
    return (
      <Dropzone onDrop={this.onDropFile}>{
        ({ getRootProps, getInputProps, isDragAccept,
          isDragReject, isDragActive }) => {
          const style = useMemo(() => ({
            ...baseStyle,
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {})
          }), [
            isDragActive,
            isDragReject
          ]);
          return (
            <section>
            <div {...getRootProps({style})}>
                <input {...getInputProps()} disabled={this.state.task==="verified"}/>
                <Loader {...{[this.state.task]:true, filename:this.props.filename}} />
              </div>
            </section>
          )
        }
      }
      </Dropzone>
    )
  }

}
export default Dropbox;
