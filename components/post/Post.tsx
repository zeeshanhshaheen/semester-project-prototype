import * as React from 'react';
import {
  Alert,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Menu,
  styled,
  MenuItem,
  Tooltip,
} from '@mui/material/';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { WarningAmber } from '@mui/icons-material';
import ReportDialog from '../dialog/Dialog';

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
  const [dialogType, setDialogType] = React.useState<'report' | 'accuracy'>(
    'report'
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isDialogOpen, setDialogOpen] = React.useState(false);

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

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleReportClick = () => {
    setDialogType('report');
    handleDialogOpen();
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleReportSubmit = (reportText: string) => {
    console.log('Report submitted with text:', reportText);
  };

  const handleAccuracyClick = () => {
    setDialogType('accuracy');
    handleDialogOpen();
  };

  return (
    <>
      <ReportDialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        onSubmit={(value) => {
          if (typeof value === 'string') {
            console.log('Report submitted with text:', value);
          } else {
            console.log('Accuracy rating given:', value);
          }
        }}
        dialogType={dialogType}
      />

      <Card sx={{ maxWidth: 345, width: '100%' }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {userAvatar}
            </Avatar>
          }
          action={
            <div>
              <IconButton aria-label="settings" onClick={handleMenuOpen}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Mute</MenuItem>
                <MenuItem onClick={handleMenuClose}>Block</MenuItem>
                <MenuItem onClick={handleReportClick}>Report</MenuItem>
                <MenuItem onClick={handleAccuracyClick}>Accuracy</MenuItem>
              </Menu>
            </div>
          }
          title={userName}
          subheader={date.toDateString()}
        />
        {/*<div></div>*/}
        {imageUrl && (
          <CardMedia
            component="img"
            height="194px"
            src={imageUrl}
            alt="user images"
            loading="lazy"
          />
        )}
        {accuracy < 0.5 && (
          <div className={styles.disclaimer}>
            <Alert
              icon={<WarningAmber fontSize="inherit" />}
              variant="outlined"
              severity="error"
              sx={{ justifyContent: 'center' }}
            >
              The real content is different to what is shown this might be scam.
              Stay alerted when interacting with it!
            </Alert>
          </div>
        )}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <Typography variant="caption" gutterBottom marginLeft="5px">
          {`Trust Rate: ${Math.floor(accuracy * 100)}%`}
        </Typography>
        <BorderLinearProgress variant="determinate" value={accuracy * 100} />
        {/* Tooltip Accuracy
        <Tooltip title={`Accuracy: ${accuracy * 100}%`} placement="top">
          <BorderLinearProgress variant="determinate" value={accuracy * 100} />
        </Tooltip>
        */}
      </Card>
    </>
  );
}
