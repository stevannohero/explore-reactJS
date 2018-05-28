import React, { Component } from 'react';
import './TextWarna.css';


class TextWarna extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		onHover : false,
  		onClick : false,
  	}
  	this.toggleHover = this.toggleHover.bind(this);
  	this.toggleClick = this.toggleClick.bind(this);
  }

  toggleHover(){
  	this.setState({onHover : !this.state.onHover,})
  }

  toggleClick(){
  	this.setState({onClick : !this.state.onClick,})
  }

  render () {
  	var textStyle;
  	if (this.state.onClick) {
  		textStyle = {
  		    width: '118px',
  			height: '20px',
  			fontFamily: 'Muli',
  			fontSize: '16px',
  			fontWeight: 'normal',
  			fontStyle: 'normal',
  			fontStretch: 'normal',
  			lineHeight: 'normal',
  			letterSpacing: 'normal',
  			color: '#119767'
  		}
  	} else if (this.state.onHover) {
  		textStyle = {
  		    width: '118px',
  			height: '20px',
  			fontFamily: 'Muli',
  			fontSize: '16px',
  			fontWeight: 'normal',
  			fontStyle: 'normal',
  			fontStretch: 'normal',
  			lineHeight: 'normal',
  			letterSpacing: 'normal',
  			color: '#03bc7b'
  		}
  	} else {
  		textStyle = {
  		    width: '118px',
  			height: '20px',
  			fontFamily: 'Muli',
  			fontSize: '16px',
  			fontWeight: 'normal',
  			fontStyle: 'normal',
  			fontStretch: 'normal',
  			lineHeight: 'normal',
  			letterSpacing: 'normal',
		    color: '#03d188'
  		}
  	}

    return (
      <div>
        <p style = {textStyle} 
           onMouseEnter = {this.toggleHover} 
           onMouseLeave = {this.toggleHover} 
           onClick = {this.toggleClick}>
        text link normal
        </p>
      </div>
    )
  }
}

export default TextWarna;