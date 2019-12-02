import React from "react";

export default class IronhackCalendar extends React.Component {
  render() {
    return (
        <div>
            <h1>My calendar rocks {Math.random().toFixed(2)}</h1>
            <input type="date"></input>
        </div>
    )
  }
}
