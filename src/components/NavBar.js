import { AppBar, Toolbar, Typography } from '@material-ui/core';
import logo from '../logo.png';
import { connect } from 'react-redux'

const NavBar = ({ stat }) => {
    return (
        <AppBar position='static' style={{
            backgroundColor: stat.color
        }}>
            <Toolbar>
                <img src={stat.logo} className="App-logo" alt="logo" width='50rem' />
                <Typography variant="h6" >
                    Big Red Trends
            </Typography>
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = (state) => ({
    stat: state.stat
})

export default connect(mapStateToProps, null)(NavBar)