import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return <>
        <div className='flex gap-5 m-5 text-blue-600'>

            <Link to="/login1">Login1</Link>
            <Link to="/login2">Login2</Link>
            <Link to="/login3">Login3</Link>
        </div>
    </>
}

export default Home