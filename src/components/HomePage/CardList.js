import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import { fade, makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import Error from './Error';


const useStyles = makeStyles((theme) => ({
    container: {
        padding: '12px',
    },
    cardList: {
        marginTop: '72px',
    },
}));
export default function CardList() {
    const classes = useStyles();
    const list = useSelector(state => state.photos.list);
    const loading = useSelector(state => state.photos.isLoading);
    const isError = useSelector(state => state.photos.isError);
    // console.log("list: ", list);
    return (
        <div className={classes.cardList} >
            {(loading || isError) && <LinearProgress />}
            <Container className={classes.container}>
                <Grid container spacing={3}>
                    {isError ? <Error /> : <List list={list} />}
                </Grid>
            </Container>
        </div>
    );
}

function List({ list }) {
    return (
        list.map((ele, idx) => {
            return <ImageCard key={idx} photoObj={ele} />
        })
    )
}

