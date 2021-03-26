import React from 'react';
import NavBar from './components/NavBar';
import LineGraph from './components/LineGraph'
import BottomTabs from './components/BottomTabs'
import SortableTable from './components/SortableTable'
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import store from './redux/store'
import { Provider } from 'react-redux'

const useStyles = makeStyles({
  root: {
    backgroundColor: 'gray',
  }
})

const App = () => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <NavBar />
      <Box margin={5} className={classes.root}>
        <LineGraph />
      </Box>
    </Provider>
  );
}


export default App
