import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import { editDescription } from '../../reducer/photoReducer';

export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const [description, setDescription] = React.useState('');
    useEffect(() => {
        setDescription(props.description)
    }, [open])
    const handleSubmit = () => {
        let id = props.id;
        dispatch(editDescription({ id, description }))
        handleClose();
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleInput = (e) => {
        setDescription(e.target.value);
    }
    return (
        <div>
            <Button variant="contained" size="small" color="primary" onClick={handleClickOpen}>
                Edit
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Descripton</DialogTitle>
                <DialogContent>

                    <TextareaAutosize
                        aria-label="minimum height"
                        rowsMin={3}
                        cols={30}
                        value={description}
                        placeholder="description"
                        onChange={handleInput}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" size="small" variant="contained">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary" size="small" variant="contained">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}