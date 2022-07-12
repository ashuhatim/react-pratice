import React, { Component } from 'react'
import HOCCounter from './HOCCounter';
 class HOCClickCounter extends Component {
  render() {
    
    const {count,increasecount} = this.props;

    return (
      <div>
          <h2 onClick={increasecount}>Click Count: {count} times</h2>
      </div>
    )
  }
}

export default HOCCounter(HOCClickCounter)
