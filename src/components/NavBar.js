import { AppBar, Toolbar, Typography, Select, MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import React, { useEffect } from 'react'
import {
    GET_TEAMS_REQUESTED,
    GET_STAT_REQUESTED
} from '../redux/actions/statAction';
import { makeStyles } from '@material-ui/styles';


const NavBar = ({ stat, team, getTeams, getStats }) => {
    useEffect(() => {
        getStats(stat.team);
        getTeams();
    }, [stat.team]);

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
                <img src={stat.logo} className="App-logo" alt="logo" width='50rem' />
                <Typography variant="h6" >
                    Big Red Trends
            </Typography>
                <Select className={useStyles().select} value={stat.team} onChange={(e, val) => getStats(val.props.children)}>
                    {team.teams.map(t => <MenuItem key={t.id} value={t.school}>{t.school}</MenuItem>)}
                </Select>
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
    getTeams: () => dispatch({ type: GET_TEAMS_REQUESTED })
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)