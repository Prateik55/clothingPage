import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const colors = [
    {
        key: 1,
        color: "blue"
    },
    {
        key: 2,
        color: "indigo"
    },
    {
        key: 3,
        color: "purple"
    },
    {
        key: 4,
        color: "pink"
    },
    {
        key: 5,
        color: "red"
    },

    {
        key: 6,
        color: "orange"
    },
    {
        key: 7,
        color: "yellow"
    },
    {
        key: 8,
        color: "green"
    },
    {
        key: 9,
        color: "teal"
    },
    {
        key: 10,
        color: "cyan"
    },
    {
        key: 11,
        color: "gray"
    },
    {
        key: 12,
        color: "black"
    },
]

// function to change the look of the button on click 





const ColorFilter = (props) => {
    const [active, setActive] = useState(false);


    return (
        <Button lg={1} className={` bg-${props.color} mx-2 my-1 px-1 py-2 rounded `}
            style={{ width: "1.20rem", outline: active ? "2px solid " : '', border: active ? "solid white 2px": "", outlineOffset: active ? "0.25px" : '' }}
            onClick={() => setActive(!active)}
        > </Button>

    )
}
export { colors }

export default ColorFilter