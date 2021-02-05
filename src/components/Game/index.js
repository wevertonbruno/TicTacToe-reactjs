import React from 'react';
import Board from '../Board';
import './style.css';

class Game extends React.Component{
    render(){
        return(
            <div>
                <div className="game">
                    <div className="game-board">
                        <Board />
                    </div>
                </div>
                <div className="game-info">
                    {/* todo */}
                </div>
            </div>
        )
    }
}

export default Game;