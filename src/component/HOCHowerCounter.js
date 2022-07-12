import React, { Component } from 'react'
import HOCCounter from './HOCCounter';
 class HOCHowerCounter extends Component {

    
    render() {
     
     const {count,increasecount} = this.props;

    return (
      <div>
          <h2 onMouseOver={increasecount}>HowerCount: {count} times</h2>
      </div>
    )
  }
}
export default HOCCounter(HOCHowerCounter)