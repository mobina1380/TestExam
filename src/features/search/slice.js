import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// const initialState = {
//   postList: []
// };
// export interface PostState {
//   [x: string]: any;
//   postList: Array<{id: number, name: string}>;
//   id: number
// }

const initialState = {
  postList: [],
  id: 1,
  searchResults: [],
  isLoading: false,
  errorMessage: "",
  searchTerm: null,
};

export const slice = createSlice({
  name: "result",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.postList = action.payload;
    },
    addSearchResults: (state, action) => {
      // console.log(state);
      // console.log("sfdlkjjjjjj");
      // console.log(action.payload[0]['type']);
      // console.log(action.payload[1]['response']);
      // console.log(action.payload.type=='AUDIO_BOOK');
      // console.log(typeof(action.payload.type));
   
   
      //if(action.payload.type=="SONG" || action.payload.type=="AUDIO_BOOK" || action.payload.type=="PODCAST"){
      // if(String(action.payload.type) !='ALL'){
      //   alert('salam');
      // state.searchResults = (action.payload[1]['response']);

      // }
      //  else{
      //   alert('fkjljkfsd');
      // // state.searchResults = state.searchResults.concat(action.payload[1]['response']);
      
     // }
     state.searchResults = state.searchResults.concat(action.payload);
     
    },
    setLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setDefaultResults: (state) => {
      state.searchResults = [];
    },
    addSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  addPosts,
  addSearchResults,
  setErrorMessage,
  setLoading,
  addSearchTerm,
  setDefaultResults,
} = slice.actions;
export const selectSearchResults = (state) => state.result.searchResults;
export const selectSearchTerm = (state) => state.result.searchTerm;
export const selectErrorMessage = (state) => state.result.errorMessage;
export default slice.reducer;
