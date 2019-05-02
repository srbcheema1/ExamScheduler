import React, {Component} from 'react';
import './footer.css'

class Footer extends Component{
  render(){
    return(
        <div className="srb-footer">
            <hr style={{marginBottom:'0'}}/>
            <div className="text-center content">
            <a href="https://www.linkedin.com/in/srbcheema1/" 
            style={{color:'#999',textDecoration:'none'}}>
                © 2019 Copyright:
                <span style={{letterSpacing:'4px'}}> </span>
                a 
                <span style={{letterSpacing:'4px'}}> </span>
                <span style={{color:'#8b8b8b', fontWeight:'700'}}>srbcheema1</span>
                <span style={{letterSpacing:'4px'}}> </span>
                production
            </a>
            </div>
        </div>
    );
  }
}
export default Footer;