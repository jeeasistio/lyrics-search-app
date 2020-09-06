import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Icon,
  Box
} from '@material-ui';

const TrackItem = ({ track }) => {

  const {
    track_name: trackName,
    album_name: albumName,
    artist_name: artistName,
    commontrack_id: id
  } = track;

  return (
    <Card>
      <CardHeader title={trackName} />
      <CardContent>
        <Box display="flex" alignItems="center">
          <Icon fontSize="small">album</Icon>
          <Typography variant="subtitle2">Album:&nbsp;&nbsp;</Typography>
          <Typography>{albumName}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Icon fontSize="small">person</Icon>
          <Typography variant="subtitle2">Artist:&nbsp;&nbsp;</Typography>
          <Typography>{artistName}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/lyrics/${id}`} fullWidth>View Lyrics</Button>
      </CardActions>
    </Card>
  )
}

export default TrackItem;