import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [description, setDescription] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleInput = (e) => {
        setDescription(e.target.value);
    }
    useEffect(() => {
        setDescription(props.description)
    }, [open])
    return (
        <div>
            <Button variant="contained" size="small" color="primary" onClick={handleClickOpen}>
                Edit
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Descripton</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Description"
                        type="text"
                        // defaultValue={props.description || ''}
                        value={description}
                        onChange={handleInput}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" size="small" variant="contained">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary" size="small" variant="contained">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}