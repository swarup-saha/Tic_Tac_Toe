import React from "react";
import GridItems from "./GridItems";

class GridRows extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className="grid-row">
          {[1, 2, 3].map((item) => {
            return (
              <GridItems
                colIndex={item}
                rowIndex={this.props.index}
                boardState={this.props.boardState}
                updateBoard={this.props.updateBoard}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default GridRows;
