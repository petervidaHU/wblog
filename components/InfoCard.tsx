import React, { FC } from 'react'
import { formatNumber } from '@/func/formatNumbers'
import { styled } from "@mui/system";
import { Box, Typography } from '@mui/material'
import { commonS } from '@/styles/theme';

interface Props {
    population?: number,
    county?: string,
}

const InfoCard: FC<Props> = ({ population, county }: { population?: number, county?: string }) => {
    return (
        <InfoContainer >
            {population !== undefined && <Typography component="span">Population: {formatNumber(population)}</Typography>}
            {county && <Typography component="span">County: {county}</Typography>}
        </InfoContainer>
    )
}

export default InfoCard

const InfoContainer = styled('div')({
    textAlign: 'left',
    fontSize: commonS.sizes.small,
    opacity: 0.6,
    transition: 'opacity 0.3s ease',
    '& span': {
        display: 'inline-block',
        '&:not(:last-child)::after': {
            content: '"|"',
            marginLeft: '1rem',
            marginRight: '1rem',
        },
    },
    '&:hover': {
        opacity: 1,
    },
})
