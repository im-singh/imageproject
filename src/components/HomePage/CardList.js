import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { fade, makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';


const useStyles = makeStyles((theme) => ({
    container: {
        padding: '12px',
        paddingTop: '72px',
    },

}));
export default function CardList({ list }) {
    const classes = useStyles();
    console.log("list: ", list);
    return (
        <div className="card-list">
            <Container className={classes.container}>
                <Grid container spacing={3}>
                    {
                        list.map((ele, idx) => {
                            return <ImageCard key={idx} photoObj={ele} />
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
}

