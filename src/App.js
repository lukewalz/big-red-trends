import React from 'react';
import NavBar from './components/NavBar';
import LineGraph from './components/LineGraph'
import CustomTable from './components/CustomTable'
import { Box } from '@material-ui/core';
import store from './redux/store'
import { Provider } from 'react-redux'


const App = () => {

  return (
    <Provider store={store}>
      <NavBar />
      <Box margin={1} >
        <LineGraph />
        <CustomTable />
      </Box>
    </Provider >
  );
}


export default App
