import { styled } from "@mui/system";
import { darkText } from "./theme";

export const MainText = styled('div')({
    textAlign: 'justify',
    lineHeight: '1.6',
    hyphens: 'auto',
    fontFamily: 'sans-serif',
    fontSize: '16px',
    color: '#333',
    paddingTop: '.7rem',
})

// IMAGE

export const Figcaption = styled('figcaption')({
    fontFamily: 'serif',
    textAlign: 'center',
    marginTop: 8,
    color: `${darkText}`,
    fontSize: '.85rem',
});

export const Figur = styled('figure')({
    marginTop: '1rem',
    marginBottom: '1rem',
});

export const StyledImage = styled('img')({
    margin: 'auto auto',
    width: '70%',
    height: 'auto',
    display: 'block',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.06)',
    },
});

export const ImageContainer = styled('div')({
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
   
})
