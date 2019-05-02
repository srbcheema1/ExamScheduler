import React, {Component} from 'react';
import './templates.css'

class TemplatePannel extends Component{
    render() {
        return (
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
        )
    }
}

export default TemplatePannel;