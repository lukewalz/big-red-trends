import React from 'react';
import NavBar from './components/NavBar';
import LineGraph from './components/LineGraph'
import BottomTabs from './components/BottomTabs'
import SortableTable from './components/SortableTable'
import { Box } from '@material-ui/core';

import store from './redux/store'
import { Provider } from 'react-redux'


const App = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <Box m={3}>
        <LineGraph />
        <SortableTable />
      </Box>
    </Provider>
  );
}


export default App
