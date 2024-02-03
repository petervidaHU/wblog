import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import { Fade, styleModalContent } from "./Fade";


interface MyModalProps {
    isOpen: boolean,
    opener: any,
    children: React.ReactNode;
}

export const MyModal: React.FC<MyModalProps> = ({isOpen, opener, children}) => {
    const handleClose = () => opener(false);

    return (
        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            open={isOpen}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    TransitionComponent: Fade,
                },
            }}
        >
            <Fade in={isOpen}>
                <div
                    style={styleModalContent}
                >
                    {children}
                </div>
            </Fade>
        </Modal>
    )
}