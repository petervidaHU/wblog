import { styled } from "@mui/system";
import { theme } from "./theme";

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
    textAlign: 'center',
    marginTop: 8,
    color: theme.palette.secondary.dark,
    fontSize: '.85rem',
});

export const Figur = styled('figure')({
    marginTop: '2rem',
    marginBottom: '2rem',
});

export const StyledImage = styled('img')({
    margin: 'auto auto',
    width: '70%',
    height: 'auto',
    display: 'block',
    borderRadius: theme.shape.borderRadius,
});

export const ImageContainer = styled('div')({
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    cursor: 'pointer',
})
