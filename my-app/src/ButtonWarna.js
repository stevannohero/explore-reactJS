import React, { Component } from 'react';
import './TextWarna.css';


class TextWarna extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		onHover : false,
  		onClick : false,
      onFocus : false,
  	}
  	this.toggleHover = this.toggleHover.bind(this);
  	this.toggleClick = this.toggleClick.bind(this);
    this.toggleFocus = this.toggleFocus.bind(this);
  }

  toggleFocus(){
    this.setState({onFocus : !this.state.onFocus,})
  }

  toggleHover(){
  	this.setState({onHover : !this.state.onHover,})
  }

  toggleClick(){
  	this.setState({onClick : !this.state.onClick,})
  }

  render () {
  	var buttonStyle, buttonTextStyle;
    if (this.state.onHover){
      buttonStyle = {
       width: '224px',
       height: '44px',
       borderRadius: '4px',
       backgroundColor: '#03bc7b',
       border: 'solid 1px #03d188',
      }
    } else if (this.state.onClick){
      buttonStyle = {
       width: '224px',
       height: '44px',
       borderRadius: '4px',
       backgroundColor: '#119767',
       border : 'solid 1px #119767',
      }
    } else {   
      buttonStyle = {
       width: '224px',
       height: '44px',
       borderRadius: '4px',
       backgroundImage: 'linear-gradient(to right, #03bc7b, #03d188)',
       border: 'solid 1px #eeeeee',
      }
    }

    buttonTextStyle = {
       width: '93px',
       height: '20px',
       fontFamily: 'Muli',
       fontSize: '16px',
       fontWeight: 'normal',
       fontStyle: 'normal',
       fontStretch: 'normal',
       lineHeight: 'normal',
       letterSpacing: 'normal',
       textAlign: 'center',
       color: '#ffffff',
       padding : '12px 65px 12px 65px',
    }

    return (
      <div style = {buttonStyle}
           onMouseEnter = {this.toggleHover}
           onMouseLeave = {this.toggleHover}
           onClick = {this.toggleClick}
           onFocus = {this.toggleFocus}>
          <div style= {buttonTextStyle} >
            CHECK OUT
          </div>
      </div>
    )
  }
}

export default TextWarna;