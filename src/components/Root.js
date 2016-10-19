// Imports from react-router
import {BrowserRouter, Match, Miss} from 'react-router';
import React from 'react'

// If this a string, webpack thinks that you are looking in the node modules
// directory ex: import StorePicker from 'StorePicker';
// what we need to do is give a relative path
// You don't need the .js at the end though
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';
import GoogleApiWrapper from './Map'


// Root is the stateless component that we use here in order to
// serve all of our components based on their paths
const Root = () => {
  // BrowserRouter is the top level API component for the router
  return (
    <BrowserRouter>
      {/*
        There needs to be a div around the match and miss blocks.
        They can't be direct children to <BrowserRouter>
        */}
      <div>
        {/*
          All of these are props for these components and they need
          to go in curly brackets
          */}
        {/*
          Match is supposed to go about looking for either patterns or
          exactly the path that's asked for
          read more on the API.
          */}
        <Match exactly pattern="/" component={StorePicker} />
        <Match exactly pattern="/map" component={GoogleApiWrapper} />
        <Match pattern="/store/:storeId" component={App} />
        {/*
          Miss is used whenever we want to track if the page is not found
           */}
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  );
}

export default Root;
