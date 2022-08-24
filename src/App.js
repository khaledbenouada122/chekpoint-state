import React, { Component } from 'react'
import Info from './comound/Info'
import MyData from './comound/MyData'


 class App extends Component {
  constructor(props){
    super(props)
    this.state={
      fname:"khaled",
      lname: "wada",
      age:25,
    
      count:0,
      name:"",
      password:"",
      email:" ",
    }
  }
  btnPlus=()=>{this.setState({count:this.state.count+1})}
  
  btnminu=()=>{this.setState({count:this.state.count-1})}
  handleChange=(e)=>{this.setState({[e.target.name]:e.target.value})}
  showData=()=>{this.setState({show:!this.Data})}
  render() {
   
    return (
      <div>App
          <h1>hello {this.state.fname} {this.state.lname}</h1>
          <h2>age:{this.state.age}</h2>
     
          <button onClick={this.btnPlus}>+</button>
          
          <p>{this.state.count}</p>
          <button onClick={this.btnminu}>-</button>
          <label>
            <hr></hr>
          <input type="text" onChange={this.handleChange} name="name" placeholder ="put your name"></input>
          <input type="text" onChange={this.handleChange} name="password" placeholder ="put your password"></input>
          <input type="text"onChange={this.handleChange}  name="email"  placeholder ="put your email"></input>
          <button>Confirmer</button>
          </label>
          <Info data={this.state}></Info>
          {this.state.show?<MyData/>:"so sorry"}
          <button onClick={this.showData}>show Data</button>
      </div>
    )
  }
}
export default App
