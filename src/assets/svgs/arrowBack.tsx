import React from 'react'

interface Props {
    width?: number;
    height?: number;
    className?: string;
}

export function ArrowBackIcon({width=24, height=24, className}: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={"hover:stroke-white " + className}
            width={width}
            height={height}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke='#A1A1AA'
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="5" y1="12" x2="9" y2="16" />
            <line x1="5" y1="12" x2="9" y2="8" />
        </svg>
    )
}
