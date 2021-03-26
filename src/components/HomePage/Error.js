import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export default function Error({ msg }) {
    return (
        <Grid item xs={12}>
            <Typography component="strong">
                Please try again.
            </Typography>
        </Grid>
    );
}
