// import statements are also difefrent now
import React from 'react';
// By using these curly brackets we can simply import one function
import { render } from 'react-dom';

// import the Root here to serve the app
// This is going to encapsulate the router completely so we can render the
// pages directly from there
import Root from './components/Root';

// We can import our styles here also using webpack
import './css/style.css'

// The root is plugged to React Dom render
render(<Root/>, document.querySelector('#main'));
