import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { fade, makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import EditDialog from './EditDialog';
import ImageModal from './ImageModal';

const useStyles = makeStyles((theme) => ({
    media: {
        height: 240
    },
    description: {
        textAlign: "left"
    }
}))

export default function ImageCard({ photoObj }) {
    const classes = useStyles();
    const [isModalOpen, toggleModal] = useState(false);

    const handleImgClick = () => {
        toggleModal(true);
    }
    const closeModal = () => {
        toggleModal(false);
    }

    return (
        <Grid item xs={12} sm={6} md={4} xl={3}>
            <ImageModal open={isModalOpen} url={photoObj.urls.full} closeModal={closeModal} />
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={photoObj.urls.thumb}
                        title="Contemplative Reptile"
                        onClick={handleImgClick}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                            <strong>Description : </strong>
                            {photoObj.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/* <Button size="small" color="primary" variant="contained" >
                        Edit
                    </Button> */}
                    <EditDialog description={photoObj.description} />
                    <Button size="small" color="primary" variant="contained" >
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
