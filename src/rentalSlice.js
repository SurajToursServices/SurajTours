import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rentals: [],
};

const rentalSlice = createSlice({
  name: 'rental',
  initialState,
  reducers: {
    addRental: (state, action) => {
      state.rentals.push(action.payload);
    },
  },
});

export const { addRental } = rentalSlice.actions;
export default rentalSlice.reducer;
