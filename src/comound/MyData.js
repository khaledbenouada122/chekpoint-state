import React, { Component } from 'react'

class MyData extends Component {
 componentWillUnmount(){
    console.log("the comound named my data will unmount")

 }
    render() {
    return (
      <p>MyData</p>
    )
  }
}
export default MyData