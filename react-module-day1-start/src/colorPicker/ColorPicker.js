import React from "react";

export default class ColorPicker extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div
        style={{
          backgroundColor: this.props.colour ? this.props.colour : "#ccc",
          height: 150,
          width: 150
        }}
      >
        {this.props.color}
      </div>
    );
  }
}
