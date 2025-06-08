import React, { Component, ReactText } from "react";
import * as vexchords from "vexchords";
type ChordNote = [number, number | "x" | 0, string?];

const wrapperStyle = {
  border: "2px blue solid",
  padding: 10,
  borderRadius: 10,
  display: "inline-block",
};

interface ChordConfig {
  value: {
    chord: ReactText[][];
    position?: any;
    barres?: any[];
  };
  options?: {};
}

interface VexChordComponentProps {
  chord_scale_1: ChordNote[]; // array of notes;
  chord_position_1?: number;
  chord_barres_1?: any[];
}

interface VexChordComponentState {
  x: number;
  y: number;
  chords: ChordConfig[];
}

export default class VexChordComponent extends Component<
  VexChordComponentProps,
  VexChordComponentState
> {
  constructor(props: VexChordComponentProps) {
    super(props);

    const chord_1: ChordConfig = {
      value: {
        chord: props.chord_scale_1,
        position: props.chord_position_1,
        barres: props.chord_barres_1 || [],
        tuning: ["E", "A", "D", "G", "B", "e"],
      },
      options: {
        width: 200, // canvas width
        height: 240, // canvas height
        circleRadius: 7, // circle radius
        defaultColor: "#000", // default color
        bgColor: "#FFF", // background color
        strokeColor: "#000", // stroke color (overrides defaultColor)
        textColor: "#000", // text color (overrides defaultColor)
        stringColor: "#000", // string color (overrides defaultColor)
        fretColor: "#000", // fret color (overrides defaultColor)
        labelColor: "#000", // label color (overrides defaultColor)
      },
    };

    this.state = {
      x: 0,
      y: 0,
      chords: [chord_1, chord_1],
    };
  }

  componentDidMount() {
    const { chords } = this.state;

    chords.forEach((chord) => {
      vexchords.draw("#vexchords", chord.value, chord.options);
    });
  }

  render() {
    return <div id="vexchords" style={wrapperStyle} />;
  }
}
