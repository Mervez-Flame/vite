/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

const Jason = (props) => {
    const [display, setDisplay] = useState("")
    const [search, setSearch] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const name = e.target.names.value
        setDisplay(name)
        console.log(`Your username is ${name}`)
        e.target.reset()
    }



    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjRhZDcxYjNkNmRlNTg4YmJjNTBkMzgyZTM2NDg5MyIsInN1YiI6IjY1MTZkMzlhOTNiZDY5MDBlMTJkMWZhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ut672ByiymU3uORTgkdXgaqqT4p7KNjM5XDBoDA4I0U'
            }
        };


        const url = `https://api.themoviedb.org/3/search/movie?query=${display}&include_adult=false&language=en-US&page=1`;

        fetch(url, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    })

    return (
        <div className='text-blue-500 flex flex-col items-center gap-y-10'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center my-20 w-[300px]'>
                <input className='border w-full' type="text" placeholder='Input your name' name='names' />
                <button className='bg-blue-700 w-full' type='send'>Submit</button>


                <h1>{display}</h1>
            </form>




            {display.map((items, id) => {
                return (


                    <div key={id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`} />
                        <h1 >{items.original_title} </h1>
                    </div>


                )
            })


            }




        </div>
    )
}

export default Jason