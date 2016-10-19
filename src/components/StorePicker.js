// import statements are also difefrent now
// This needs to be done on top of every single file
import React from 'react';
import { getFunName } from '../helpers'

// This is the ES-6 syntax to define components
class StorePicker extends React.Component {
  render() {
    // JSX rules:
    // 1. Always use className instead of class
    // 2. Only return one top level element per component
    // 3. All tags need a closing tag or need to self close.
    return (
      // 5. Also a comment used above JSX will blow your code
      <form className="store-selector">
        {/* 4. Rule 4 is the new comment styling */}
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store Name"
          defaultValue={getFunName()}/>
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

// This allows us to add this component anywhere we need.
export default StorePicker;
