import React, { Component } from 'react';
import Square from './Square'

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Squares: Array(9).fill(null),
    }
  }

  handleClick(i) {
    const Squares = this.state.Squares.slice();
    Squares[i] = 'X';
    this.setState({Squares: Squares})
  }

  renderSquare(i) {
    return (
      <Square 
        value={this.state.Squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
}

export default Board;
  