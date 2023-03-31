import { useAppDispatch, useAppSelector } from './app/hooks';
import { RootState } from './app/store';
import { Board } from './components/Board';
import { jumpTo, play, SquaresArray } from './features/gameSlice';

export const App = () => {
  const dispatch = useAppDispatch();
  const { history: histry, currentMove }
    = useAppSelector((state: RootState) => state.game);

  const squares: SquaresArray = histry[currentMove];
  const xIsNext = currentMove % 2 === 0;

  const handlePlay = (nextSquares: SquaresArray) => {
    dispatch(play(nextSquares));
  };

  const handleJumpTo = (nextMove: number) => {
    dispatch(jumpTo(nextMove));
  };

  const moves = histry.map((squares1, move) => {
    let description: string;

    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }

    return (
      <li key={move}>
        <button onClick={() => handleJumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
