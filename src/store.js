
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
          },

          delete1: (state, action) => {
            const { data, i } = action.payload;
            for(var a = 0; a < state.length; a++){
              if(Object.keys(state[a]) == i){
                state.splice(a,1)
              }
            }
          },
      }
  })

export default configureStore({
  reducer: { 
    In : In.reducer
  }
})

export let { input, delete1} = In.actions