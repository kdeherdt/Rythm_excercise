import * as React from "react";
import { render } from "react-dom";
import ExampleComponent from "./example";
import { scaleShapes } from './scales.js';

import "./styles.css";

// test constants
const notes_line_1 = [
  "f5/8, e4, d5, c5/16, c5, d5/8, e5, f5, f5/32, f5, f5, f5"
];
const notes_line_2 = [
  "f5/8, e4, d5, c5/16, c5, d5/8, e5, f5, f5/32, f5, f5, f5"
];


const chord_1 = [[1, 2, '3'], [2, 3, 'C'], [3, 2, 'A'], [4, 0, 'D'], [5, 0], [6, "x"]];
const position_1 = 5;
const barres_1 = [{ fromString: 3, toString: 1, fret: 1 }];

function App() {
  return (
    <div className="App">
      <h1>Scale excercise</h1>
      <h2>Play along in the rythm in the scale</h2>
      <ExampleComponent stave_notes_1={notes_line_1} stave_notes_2={notes_line_2} chord_scale={chord_1} chord_position={position_1}  chord_barres={barres_1}/>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
