import React, { useContext, useEffect } from 'react';
import axios from 'axios'
import { makeStyles, Box, Grid, Typography } from '@material-ui';
import TrackItem from './TrackItem.jsx'

import { TracksContext } from '/contexts/TracksContext.jsx';

const SearchList = () => {

  const useStyles = makeStyles(theme => ({
    trackList: {
      margin: 0,
      maxWidth: '100%'
    }
  }))

  const classes = useStyles();

  const { tracks, dispatchTracks } = useContext(TracksContext);

  useEffect( async () => {
    const res = await axios.get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ph&f_has_lyrics=1&apikey=6249d0414a4138bea4e67323fccc223f')
    const fetchedTopTracks = await res.data.message.body['track_list']
    
    const topTracksAction = () => ({
      type: 'TOP_TRACKS',
      payload: {
        top_tracks: fetchedTopTracks,
        heading: 'Top Tracks'
      }
    })
    
    dispatchTracks(topTracksAction());
  }, [])

  return (
    <React.Fragment>
      <Typography paragraph variant="h5" align="center">{tracks.heading}</Typography>
      <Grid 
        className={classes.trackList}
        container
        spacing={2}
       >
        {tracks.track_list.map( ({ track }) => {
          return (
            <Grid xs={12} item>
              <TrackItem track={track} />
            </Grid>
          )
        })}
      </Grid>
    </React.Fragment>
  )
}

export default SearchList;