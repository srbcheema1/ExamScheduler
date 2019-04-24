import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import Loader from './loader/Loader.js'

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
    fetch('http://localhost:5000/rest', { // Your POST endpoint
      method: 'POST',
      body: data // This is your fil[e object
    }).then(
      response => response.json() // if the response is a JSON object
    ).then(
      success => {
        console.log(success) // Handle the success response object
        if(success['done']) {
          this.setState({file:acceptedFiles[0],task:'good'})
        } else {
          this.setState({file:acceptedFiles[0],task:'bad'})
        }
      }
    ).catch(
      error => console.log(error) // Handle the error response object
    );
  }
  render() {
    return (
      <Dropzone onDrop={this.onDropFile}>{
        ({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here</p>
              {this.state.file?this.state.file.name:null}
            </div>
            {this.state.ktask=='verfying'?<Loader />:null}
            {this.state.task=='good'?<p>good</p>:null}
            {this.state.task=='bad'?<p>bad</p>:null}
            {this.state.task=='empty'?<p>empty</p>:null}
          </section>
        )
      }
      </Dropzone>
    )
  }

}
export default Dropbox;