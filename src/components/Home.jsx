import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Home.css'


export default function Home() {
    return (
        <div className="Home">
            <Link to='/'><button>home</button></Link>
        </div>
    )
}
