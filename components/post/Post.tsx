import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { styled } from '@mui/material';
import { Alert } from '@mui/material';
import { WarningAmber } from '@mui/icons-material';

import styles from './post.module.css';

export interface PostProps {
  postId: number;
  userName: string;
  content: string;
  accuracy: number;
  imageUrl?: string;
}

export default function Post({
  postId,
  userName,
  accuracy,
  imageUrl,
  content,
}: PostProps) {
  const [date, setDate] = React.useState(new Date());
  const userAvatar = userName.charAt(0).toUpperCase();

  function getBarColorBasedOnValue(value: any) {
    if (value < 0.4) return 'red';
    if (value < 0.7) return 'yellow';
    return 'green';
  }

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:
        theme.palette.mode === 'light'
          ? getBarColorBasedOnValue(accuracy)
          : '#308fe8',
    },
  }));

  console.log('post', accuracy);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            {userAvatar}
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={userName}
        subheader={date.toDateString()}
      />
      {/*<div></div>*/}
      {imageUrl && (
        <CardMedia
          component='img'
          height='194'
          src={imageUrl}
          alt='user images'
          loading='lazy'
        />
      )}
      {accuracy < 0.5 && (
        <div className={styles.disclaimer}>
          <Alert
            icon={<WarningAmber fontSize='inherit' />}
            variant='outlined'
            severity='error'
            sx={{ justifyContent: 'center' }}
          >
            The real content is different to what is shown this might be scam.
            Stay alerted wehen interacting wit it!
          </Alert>
        </div>
      )}
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
      <Typography variant='subtitle2' gutterBottom>
        Trust Rate:
      </Typography>
      <BorderLinearProgress variant='determinate' value={accuracy * 100} />
    </Card>
  );
}
