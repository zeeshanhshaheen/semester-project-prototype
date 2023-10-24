import React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' style={{ flexGrow: 1 }}>
          Prototype
        </Typography>
        <Link href='/' passHref>
          <Button
            color='inherit'
            sx={{
              textDecoration: 'none',
              textTransform: 'none',
              color: 'white',
            }}
          >
            Home
          </Button>
        </Link>
        <Link href='/createpost' passHref>
          <Button
            color='inherit'
            sx={{
              textDecoration: 'none',
              textTransform: 'none',
              color: 'white',
            }}
          >
            Create Post
          </Button>
        </Link>
        <Link href='/feed' passHref>
          <Button
            color='inherit'
            sx={{
              textDecoration: 'none',
              textTransform: 'none',
              color: 'white',
            }}
          >
            Feed
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
