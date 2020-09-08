import React, { createContext, useReducer, useEffect, useState} from 'react';
import axios from 'axios';

const TracksContext = createContext();

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

const TracksProvider = ({ children }) => {
  
  const [tracks, dispatchTracks] = useReducer(reducer, initialState);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true)
    axios
      .get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ph&f_has_lyrics=1&apikey=6249d0414a4138bea4e67323fccc223f')
      .then(res => {
        setFetching(false)
        dispatchTracks({
          type: 'TOP_TRACKS',
          payload: {
            top_tracks: res.data.message.body['track_list'],
            heading: 'Top Tracks'
          }
        })
      })
  }, [])

  return (
    <TracksContext.Provider value={{
      tracks,
      dispatchTracks, 
      fetching, 
      setFetching
    }}>
    { children }
  </TracksContext.Provider>
  )
}

export { TracksContext, TracksProvider };