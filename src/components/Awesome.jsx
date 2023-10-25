/* eslint-disable no-unused-vars */
// import React from 'react'

// const Awesome = ({name, age }) => {
//     return (
//         <div on>
//             Welcome Mr. {name}. You are {age} years old.
//         </div>
//     )
// }

// export default Awesome

// eslint-disable-next-line no-unused-vars


// import React from 'react';

// const Awesome = () => {



//     function click() {
//         alert("You clicked the button bitch!!!")
//     }
//     return (
//         <div>
//             <button onClick={click}>Click me</button>
//         </div>
//     )
// }

// export default Awesome


// import React, { useState } from 'react'

// const Awesome = () => {

//     const [count, setCount] = useState(0)
//     function add(){
//         setCount(count + 1)
//     }


//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={add}>+</button>
//         </div>
//     )
// }

// export default Awesome
import React, { useState } from 'react'
import NavBar from './Nav'

const Awesome = () => {

    const [nav,setNav] = useState(false)

    function click() {
        setNav(!nav)
    }

    return (
        <div>


            {
                nav?
                    <NavBar/> 
                : ""
            }
            <button onClick={click}>Display The Nav </button>
        </div>
    )
}

export default Awesome