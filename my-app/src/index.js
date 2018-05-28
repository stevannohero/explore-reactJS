import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TextWarna from './TextWarna';
import ButtonWarna from './ButtonWarna';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ButtonWarna/>, document.getElementById('buttonContainer'));
ReactDOM.render(<TextWarna/>, document.getElementById('textContainer'))
registerServiceWorker();
