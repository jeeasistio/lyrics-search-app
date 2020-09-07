import React, { useContext, useState } from 'react';
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

  const { tracks, dispatchTracks, fetching} = useContext(TracksContext);

  return (
    <React.Fragment>
      <Typography paragraph variant="h5" align="center">{tracks.heading}</Typography>
      {fetching ? 
        <Box textAlign="center" mt={4}>
          <CircularProgress />
        </Box>
      :
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
      } 
    </React.Fragment>
  )
}

export default SearchList;