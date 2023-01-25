import React, { useState, useEffect } from 'react';
import { Container, AppBar, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/VibeONN.png';
// import R from './images/R.png';

// eslint-disable-next-line
const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="100%">
      <AppBar className={classes.appBar} position="static" color="inherit">
        {/* <Typography className={classes.heading} variant="h2" align="center">DAZZLE</Typography> */}
        {/* <img className={classes.image} src={R} alt="icon" height="60" /> */}
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container maxWidth="100%">
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
