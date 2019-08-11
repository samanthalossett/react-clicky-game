import React, {Component} from 'react';
import './App.css';
import data from './data';

class App extends Component{
  state={
    imagestoclick: data,
    count: 0,
    clicked: []
  }
renderImages=() =>{
  return this.state.imagestoclick.map(item => <img src={item.image} 
  className="itemImage" 
  onClick={this.countClicks}
  value={item.id}
  ></img>)
}
countClicks=(event) =>{
  let id=event.currentTarget.getAttribute("value");
  console.log(id);
  if (this.state.clicked.includes(id)){
    console.log("You've already clicked this one")
  }
  else {
    this.setState({
      count: this.state.count + 1,
      clicked: this.state.clicked.concat(id)
    })  
  }
}
    render(){
  return (
    <div className="App">
      <h1>your current score is: {this.state.count}</h1>
      {this.renderImages()}
      {/* <ClickyGame imagestoclick={this.state.imagestoclick} /> */}
    </div>
  );
}
}
export default App;




// ./ current director 
// .. go back one directory