import React, { Component } from "react";
import "./App.css";
import IronhackCalendar from "./ironhackCalendar/ironhackCalendar";
import RandomStudentName from "./randomStudent/randomStudentName";
import ColorPicker from "./colorPicker/ColorPicker";
import FlowerComponent from "./flowerComponent/FlowerComponent";

class App extends Component {
  constructor() {
    super();

    this.state = {
      myFavouriteColor: "pink"
    };
  }

  changeColor() {
    this.setState({
      myFavouriteColor: "blue"
    });
  }

  render() {
    return (
      <div className="App">
        <FlowerComponent></FlowerComponent>
        <FlowerComponent></FlowerComponent>
        <FlowerComponent></FlowerComponent>
        <FlowerComponent></FlowerComponent>

        Esto viene del state de App: {this.state.myFavouriteColor}

        <button onClick={() => this.changeColor()}>Change my favourite color</button>

        <h3>Me encanta el {this.state.myFavouriteColor}</h3>
        <ColorPicker edu="#bbb" colour={this.state.myFavouriteColor}></ColorPicker>

        <IronhackCalendar></IronhackCalendar>

        {this.state.myFavouriteColor}
        <RandomStudentName></RandomStudentName>

        {this.state.myFavouriteColor}


      </div>
    );
  }
}

export default App;
