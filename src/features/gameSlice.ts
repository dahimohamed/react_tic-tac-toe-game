import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SquareValue = "X" | "O" | null;
export type SquaresArray = Array<SquareValue>;

export interface GameState {
  history: SquaresArray[];
  currentMove: number;
}

const initialState: GameState = {
  history: [Array(9).fill(null)],
  currentMove: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    play: (state, action: PayloadAction<SquaresArray>) => {
      const nextHistory = state.history.slice(0, state.currentMove + 1);

      state.history = [...nextHistory, action.payload];
      state.currentMove = state.history.length - 1;
    },
    jumpTo: (state, action: PayloadAction<number>) => {
      state.currentMove = action.payload;
    },
  },
});

export const { play, jumpTo } = gameSlice.actions;

export default gameSlice.reducer;
