import Vex from "vexflow";
import React, { Component } from "react";

const VF = Vex.Flow;

export default class Stave extends Component {
  state: {
    x: number;
    y: number;
  };

  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0
    };
  }

  componentDidMount() {
    const calculatedWidth = document.body.offsetWidth - 30;
    const maxWidth = 800;
    const width = Math.min(calculatedWidth, maxWidth);
    const svgContainer = document.createElement("div");
    const { notes } = this.props;
  
    const vf = new VF.Factory({
      renderer: { elementId: svgContainer, width, height: 150 }
    });
  
    const score = vf.EasyScore();
    const context = vf.getContext();
  
    // Starting vertical position for the first system
    let yPosition = 10;
  
    notes.forEach((noteString, index) => {
      const system = vf.System({
        x: 10,
        y: yPosition,
        width: width,
        spaceBetweenStaves: 10,
      });
  
      const voice = score.voice(score.notes(noteString));
      const beams = VF.Beam.generateBeams(voice.getTickables());
  
      const stave = system.addStave({
        voices: [voice]
      });
  
      if (index === 0) {
        // Add clef and time signature only on first stave
        stave.addClef("treble").addTimeSignature("4/4");
      }
  
      vf.draw();
  
      beams.forEach(beam => beam.setContext(context).draw());
  
      // Move y position down for next stave (adjust height if needed)
      yPosition += 110; 
    });
  
    this.refs.outer.appendChild(svgContainer);
  }
  
  
  


  makeSystem(vf, width) {
    const system = vf.System({
      x: this.state.x,
      y: this.state.y,
      width: width,
      spaceBetweenStaves: 10
    });
    this.setState({ x: this.state.x + width });
    return system;
  }

  render() {
    const myStyle = {
      border: "2px blue solid",
      padding: 10,
      borderRadius: 10,
      display: "inline-block"
    };
    return <div ref="outer" style={myStyle} />;
  }
}
