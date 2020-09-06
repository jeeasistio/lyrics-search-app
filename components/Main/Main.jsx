import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import SearchTracks from './SearchTracks/SearchTracks.jsx';
import TrackLyrics from './TrackLyrics/TrackLyrics.jsx';
import { Box } from '@material-ui';

const Main = () => {
  return (
    <Box component="main">
      <Redirect from="/" to="/search" />
      <Route path="/search" component={SearchTracks} exact />
      <Route path="/lyrics/:id" component={TrackLyrics} exact />
    </Box>
  )
}

export default Main;