import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Post from './components/Post'


class App extends Component {
  render(){
    return ( 
      <div className="App">
        <Header/>
        <section className="App-main">
          <Post username="ginillabean" avatar="https://www.chicagotribune.com/resizer/Pl_EhctmVe873qZZT1znFVQ5bMo=/fit-in/800x533/smart/filters:fill(black)/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/QWGWSDYK3BE7ZBWURXXJ7AQ6MM.jpg" caption="just 4 da memes (& da trap)" image="https://www.gannett-cdn.com/-mm-/62035649379a678fb24f5dbe5a4b66cba0a995c9/c=179-0-2659-3307/local/-/media/2016/05/29/Cincinnati/Cincinnati/636001135964333349-Harambe2.jpg" />
        </section>
      </div>
    );
  }
}

export default App;