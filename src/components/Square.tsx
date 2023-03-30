import React from 'react';

interface Props {
  value: string | null,
  onSquareClick: () => void,
};

export const Square: React.FC<Props> = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};
