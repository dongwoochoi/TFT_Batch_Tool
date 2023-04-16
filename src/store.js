
import { configureStore, createSlice } from '@reduxjs/toolkit'

let In = createSlice({
    name : 'In',
    initialState : [],
    reducers : {
        input: (state, action) => {
            const { data, i } = action.payload;
            var in_data = {};
            in_data[i] = data;
            state.push(in_data);
          }
      }
  })

export default configureStore({
  reducer: { 
    In : In.reducer
  }
})

export let {input} = In.actions