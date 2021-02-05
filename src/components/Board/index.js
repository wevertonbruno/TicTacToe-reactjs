import React from 'react';
import Square from '../Square';
import Button from '../Button';
import './style.css';

class Board extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i){
        const squares = this.state.squares.slice();

        //verifica se houve winner
        if(this.calculateWinner() || squares[i]){
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({squares: squares, xIsNext: !this.state.xIsNext});
    }

    renderSquare(i){
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }

    calculateWinner() {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (this.state.squares[a] && this.state.squares[a] === this.state.squares[b] && this.state.squares[a] === this.state.squares[c]) {
                return this.state.squares[a];
            }
        }

        return null;
    }

    reset(){
        const squares = Array(9).fill(null);
        this.setState({squares: squares, xIsNext: true});
    }

    render(){

        const winner = this.calculateWinner();
        let status;

        if(!this.state.squares.includes(null)){
            status = "Draw!";
        }else if(!winner){
            status = `Next Player: ${this.state.xIsNext ? "X" : "O"}`;
        }else{
            status = 'Winner: ' + winner + "!";
        }

        return(
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
                <div className="board-actions">
                    <Button onClick={() => this.reset()} name="Restart Game" />
                </div>
            </div>
        )
    }
}

export default Board;