import React, { createContext, useReducer } from 'react';

const TracksContext = createContext();

const TracksProvider = ({ children }) => {
  
  const initialState = {
    track_list: [],
    heading: ''
  }
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SEARCH_TRACKS':
        return {
          track_list: action.payload.searched_tracks,
          heading: action.payload.heading
        }
      case 'TOP_TRACKS':
        return {
          track_list: action.payload.top_tracks,
          heading: action.payload.heading
        }
        break;
      default:
        return state;
        break;
    }
  }
  
  const [tracks, dispatchTracks] = useReducer(reducer, initialState);

  return (
    <TracksContext.Provider value={{
      tracks,
      dispatchTracks
    }}>
    { children }
  </TracksContext.Provider>
  )
}

export { TracksContext, TracksProvider };