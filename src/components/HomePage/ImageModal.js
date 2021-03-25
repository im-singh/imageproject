import React from 'react';
import Modal from '@material-ui/core/Modal';
import { fade, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    modalBody: {
        backgroundColor: "white",
        height: '80vh',
        width: "90vw",
        margin: '10vh 5vw',
        position: 'relative',
    },
    cancelBtn: {
        position: 'absolute',
        right: '2px',
        top: '2px',
        zIndex: 2000,
        backgroundColor: '#f65353',
        color: 'white',
        fontWeight: 500,
    }
}))
export default function ImageModal({ open, url, closeModal }) {
    const classes = useStyles();
    const handleClose = () => {
        closeModal();
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className={classes.modalBody}>
                <button className={classes.cancelBtn} onClick={handleClose}>X</button>
                <img src={url} width="100%" height="100%" />
            </div>
        </Modal>
    );
}
