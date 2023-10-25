/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

const Test = () => {

    const [name, setName] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setName(name + 1)
        }, 1000)
    })





    return (
        <div>
            <h1>Ie rendered the component {name} times.</h1>
        </div>
    )
}

export default Test
