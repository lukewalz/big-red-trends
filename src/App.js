import React from 'react';
import NavBar from './components/NavBar';
import LineGraph from './components/LineGraph'
import SortableTable from './components/SortableTable'
import { Box, Typography } from '@material-ui/core';
import store from './redux/store'
import { Provider } from 'react-redux'


const App = () => {

  return (
    <Provider store={store}>
      <NavBar />
      <Box margin={3} >
        <LineGraph />
        <SortableTable />
      </Box>
    </Provider >
  );
}


export default App
