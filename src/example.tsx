import React, { Component } from "react";
import Stave from "./components/stave";
import VexChordComponent from "./components/vexchord";
import VexTabComponent from "./components/vextab";
import ReactDOM from "react-dom";

class ExampleComponent extends Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      stave_notes: ["f5/8, e4, d5, c5/16, c5, d5/8, e5, f5, f5/32, f5, f5, f5"],
    };
  }

  render() {
    return (
      <div>
        <h1>Example</h1>
        {/*<Stave notes={this.state.stave_notes} />
        <Stave notes={this.state.stave_notes} />  */}
        <Stave notes={this.props.stave_notes_1} />
        <Stave notes={this.props.stave_notes_2} />

        <VexChordComponent
          chord_scale_1={this.props.chord_scale}
          chord_position_1={this.props.chord_position}
          chord_barres_1={this.props.chord_barres}
        />
      </div>
    );
  }
}

export default ExampleComponent;
