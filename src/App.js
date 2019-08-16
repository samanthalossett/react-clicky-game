import React, { Component } from 'react';
import './App.css';
import data from './data';

class App extends Component {
  state = {
    imagestoclick: data,
    count: 0,
    clicked: [],
    highscore: 0
  }
  renderImages = () => {
    return this.state.imagestoclick.map(item => <img src={item.image}
      className="itemImage"
      onClick={this.countClicks}
      value={item.id}
      key={item.id}
    ></img>)
  }
  countClicks = (event) => {
    let id = event.currentTarget.getAttribute("value");
    console.log(id);
    if (this.state.clicked.includes(id)) {
      alert("You've already clicked this one")
    }
    else {
      this.setState({
        count: this.state.count + 1,
        clicked: this.state.clicked.concat(id)
      })
      this.state.imagestoclick.sort(() => Math.random() - 0.5)
          return true; 
        }
        this.gameOver();
  }
                            
  gameOver= () =>{
    if (this.state.count > this.state.highscore){
      this.setState({highscore: this.state.count}, function(){
        console.log(this.state.highscore, 
          'huS');
      });
    }
    console.log("Game Over! Your Score:", this.state.count);  
    this.setState({count:0, clicked: []});
    return true;
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <ul>
            <li>
              
              <h1>The "Handmaids" Clicky Game!</h1>
            </li>
            <li>
            <h1>Your Score: {this.state.count}       High Score: {this.state.highscore}
            </h1>
            </li>
          </ul>
        </nav>
        <br></br>
        <header className="header">
          <h2>Click an image to begin but don't click the same image twice!</h2>
          
        </header>
       
        {this.renderImages()}
      
      </div>
    );
  }
}
export default App;




// ./ current director 
// .. go back one directory