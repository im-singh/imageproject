import { useState } from 'react';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { ArrowLeft } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    appbar: {
        padding: '12px',
    },
    title: {
        textAlign: 'left',
        paddingLeft: '1rem',
        fontWeight: 500,
        fontSize: '1.3rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.5rem',
            paddingLeft: '4rem'
        },
    },
    form: {
        display: "flex",
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(1),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 1),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },

}));

export default function Navbar() {
    const classes = useStyles();
    const [searchValue, setSearchValue] = useState('')
    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Sstring: ", searchValue)
    }
    const handleInput = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <div className="Navbar">
            <AppBar position="fixed" className={classes.appbar}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}
                        <Typography component="h1" className={classes.title}>
                            Image Gallery
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <form onSubmit={handleSearch} className={classes.form}>
                            <div className={classes.search}>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                    onChange={handleInput}
                                    value={searchValue}
                                />
                            </div>
                            <Button variant="contained" color="primary" type="submit">
                                <SearchIcon />
                            </Button>
                        </form>
                    </Grid>

                </Grid>
            </AppBar>

        </div>
    );
}
