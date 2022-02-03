import React from "react";

class GridItems extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div
          className="grid-item"
          onClick={() => {
            this.props.updateBoard(this.props.rowIndex, this.props.colIndex);
          }}
        >
          {this.props.boardState[this.props.rowIndex][this.props.colIndex]}
        </div>
      </>
    );
  }
}

export default GridItems;
