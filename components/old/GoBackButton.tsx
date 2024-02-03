import React from 'react'
import { navigate } from 'gatsby';
import { Button } from '@mui/material';

const GoBackButton = () => {
    const goBackhandler = () => {
        navigate(-1);
    }

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={goBackhandler}
        >
            Go back
        </Button>
    )
}  

export default GoBackButton;