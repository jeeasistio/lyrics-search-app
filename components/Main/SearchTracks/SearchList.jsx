import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { makeStyles, Box, Grid, Typography, CircularProgress } from '@material-ui';
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
    <React.Fragment>
      <Typography paragraph variant="h5" align="center">{tracks.heading}</Typography>
      {fetching &&
        <Box textAlign="center" mt={4}>
          <CircularProgress />
        </Box>
      }
      <Grid 
        className={classes.trackList}
        container
        spacing={2}
        justify="center"
       >
        {tracks.track_list.map( ({ track }) => {
          return (
            <Grid xs={12} sm={6} md={4} item>
              <TrackItem track={track} />
            </Grid>
          )
        })}
      </Grid>
    </React.Fragment>
  )
}

export default SearchList;