import React from 'react'

export const Title = (props) => (
    <h1 className={`text-center ${props.styleName}`}>
        {props.children}
    </h1>
)
