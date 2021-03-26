import { AppBar, Toolbar, Typography, Select, MenuItem, FormControl, InputLabel, CircularProgress, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import React, { useEffect, Suspense } from 'react'
import {
    GET_TEAMS_REQUESTED,
    GET_STAT_REQUESTED,
    SET_SIDE_OF_BALL_REQUESTED,
    CLEAR_YEAR,
    CLEAR_YEAR_REQUESTED
} from '../redux/actions/statAction';
import { makeStyles } from '@material-ui/styles';


const NavBar = ({ stat, team, getTeams, getStats, setSideOfBall, clearYearDetails }) => {
    useEffect(() => {
        getStats(stat.team);
        getTeams();
    }, []);

    const useStyles = makeStyles({
        bar: {
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: '#f6f6f6',
            color: 'black'
        }
    })


    return (
        <AppBar position='static' >
            <Toolbar className={useStyles().bar}>
                <Box display='flex' justifyContent='spaceBetween' >
                    {!stat.statLoading ?
                        <img src={stat.logo} className="App-logo" alt="logo" width='50rem' /> : <CircularProgress />}
                    <Typography variant="h6" >
                        Big Red Trends
               </Typography>
                </Box>

                <Box width={300} display='flex' justifyContent='inherit'>
                    <FormControl>
                        <InputLabel id='school'>School</InputLabel>
                        <Select labelId='school' label='School' value={stat.team} onChange={(e, val) => { getStats(val.props.value); clearYearDetails() }}>
                            {team.teams.map(t => <MenuItem key={t.id} value={t.school}>{t.school}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id='sob'>Side Of Ball</InputLabel>
                        <Select labelId='sob' value={stat.sideOfBall} onChange={(e, val) => setSideOfBall(val.props.value)}>
                            <MenuItem value='offense'>Offense</MenuItem>
                            <MenuItem value='defense'>Defense</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Toolbar>
        </AppBar >
    )
}

const mapStateToProps = (state) => ({
    stat: state.stat,
    team: state.team
})

const mapDispatchToProps = (dispatch) => ({
    getStats: (team) => dispatch({ type: GET_STAT_REQUESTED, team }),
    getTeams: () => dispatch({ type: GET_TEAMS_REQUESTED }),
    setSideOfBall: (sob) => dispatch({ type: SET_SIDE_OF_BALL_REQUESTED, sob }),
    clearYearDetails: () => dispatch({ type: CLEAR_YEAR_REQUESTED })
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)