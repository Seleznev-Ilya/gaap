import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import syncLocalStore, { StorageKeys } from "../../utils/syncLocalStore";
const { store, setStore } = syncLocalStore(StorageKeys.bodyPartCurrent);

export interface CounterState {
  activeWorkoutList: number[];
}

const initialState: CounterState = {
  activeWorkoutList: store ?? [],
};

export const bodyPartsSlice = createSlice({
  name: "bodyParts",
  initialState,
  reducers: {
    toggleActiveWorkoutList: (state, action: PayloadAction<number>) => {
      const isIncludes = state.activeWorkoutList.includes(action.payload);
      if (isIncludes) {
        const result = state.activeWorkoutList.filter(
          (n) => n !== action.payload
        );
        setStore(result);
        state.activeWorkoutList = result;
      } else {
        const result = [...state.activeWorkoutList, action.payload];
        setStore(result);
        state.activeWorkoutList = result;
      }
    },
  },
});

// onClick={(e: any) =>
//   activePicker.includes(id)
//     ? setActivePicker(activePicker.filter((n) => n !== id))
//     : setActivePicker([...activePicker, id])
// }

export const { toggleActiveWorkoutList } = bodyPartsSlice.actions;
export default bodyPartsSlice.reducer;
