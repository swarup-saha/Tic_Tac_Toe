import React from "react";
import "./app.css";
import GridRows from "./components/GridRows";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      boardState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      turn: "x"
    };
  }
  updateBoard = (row, col) => {
    const arr = this.state.boardState;
    arr[row][col] = this.state.turn;
    this.setState({
      turn: this.state.turn === "x" ? 0 : "x",
      boardState: arr
    });
  };
  render() {
    return (
      <>
        <div className="container">
          {[0, 1, 2].map((item) => {
            return (
              <GridRows
                index={item}
                boardState={this.state.boardState}
                updateBoard={this.updateBoard}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default App;
