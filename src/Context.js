import React, { Component } from 'react'

const context = React.createContext();

class Provider extends Component {
  render() {
    return (
      <context.Provider value="hello from context">
            {this.props.children}
      </context.Provider>
    )
  }
}

// const provider = context.Provider
const Consumer = context.Consumer

export { Provider, Consumer }